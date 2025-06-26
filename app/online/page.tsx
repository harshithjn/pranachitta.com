"use client"
import { useEffect, useState } from "react"
import { Calendar, Clock, Video, Leaf, ExternalLink, Eye, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  type: string
  link: string
  attachment?: string
}

interface SheetEvent {
  Title: string
  Date: string
  Time: string
  Description: string
  Type: string
  Link: string
  Attachment?: string
}

export default function OnlinePage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    fetchEventsFromSheet()
  }, [])

  const fetchEventsFromSheet = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://opensheet.elk.sh/1dJH3hzD9mh0T-ZyC47YBVi8nALgDy75F1x05ouLds1A/Sheet1")
      const data: SheetEvent[] = await response.json()

      const parsedEvents: Event[] = data
        .filter((e) => e.Title && e.Date && e.Time)
        .map((e, index) => ({
          id: `event-${index}`,
          title: e.Title,
          date: e.Date, // Display as-is from sheet
          time: e.Time, // Display as-is from sheet
          description: e.Description || "",
          type: e.Type || "Session",
          link: e.Link || "#",
          attachment: e.Attachment || "",
        }))

      setEvents(parsedEvents)
      setError(null)
    } catch (err) {
      console.error(err)
      setError("Failed to fetch events.")
    } finally {
      setLoading(false)
    }
  }

  const handleViewDetails = (e: React.MouseEvent, event: Event) => {
    e.stopPropagation() // Prevent card click
    setSelectedEvent(event)
    setShowPreview(true)
  }

  const handleJoinSession = (e: React.MouseEvent, link: string) => {
    e.stopPropagation() // Prevent card click
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleJoinFromPreview = () => {
    if (selectedEvent?.link) {
      window.open(selectedEvent.link, '_blank', 'noopener,noreferrer')
    }
  }

  const handleViewAttachment = () => {
    if (selectedEvent?.attachment) {
      window.open(selectedEvent.attachment, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-16 px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-8 h-0.5 bg-primary-custom mr-3" />
          <Leaf className="h-6 w-6 text-primary-custom" />
          <div className="w-8 h-0.5 bg-primary-custom ml-3" />
        </div>
        <h1 className="font-merienda text-5xl font-bold text-gray-900 mb-6">Online <span className="text-primary-custom block mt-2">Sessions</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our virtual sessions from anywhere in the world. Meditation, yoga, breathwork – everything you need.
        </p>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-center text-gray-500">No sessions scheduled yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="hover:shadow-xl transition duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold font-merienda text-gray-900">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  
                  {/* Button Row */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={(e) => handleJoinSession(e, event.link)}
                      className="flex-1 inline-flex items-center justify-center bg-primary-custom hover:bg-primary-dark text-white py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      <Video className="h-4 w-4 mr-1" /> Join
                    </button>
                    <button
                      onClick={(e) => handleViewDetails(e, event)}
                      className="flex-1 inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      <Eye className="h-4 w-4 mr-1" /> Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-merienda text-primary-custom text-2xl">
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  {selectedEvent.type}
                </span>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-3 text-primary-custom" />
                  <span className="font-medium">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-3 text-primary-custom" />
                  <span className="font-medium">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Video className="h-5 w-5 mr-3 text-primary-custom" />
                  <span className="font-medium">Online Session</span>
                </div>
              </div>

              {selectedEvent.description && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleJoinFromPreview}
                  className="flex-1 bg-primary-custom hover:bg-primary-dark text-white flex items-center justify-center gap-2"
                >
                  <Video className="h-4 w-4" />
                  Join Session
                  <ExternalLink className="h-3 w-3" />
                </Button>
                
                {selectedEvent.attachment && (
                  <Button
                    onClick={handleViewAttachment}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    View Attachment
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-20 px-4 bg-primary-custom">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-merienda text-4xl font-bold text-white mb-4">Checkout the pricing?</h2>
          <a
            href="/pricing"
            className="inline-block bg-white text-primary-custom hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6"
          >
            View pricing
          </a>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-merienda text-primary-custom">
              {selectedEvent ? `Join: ${selectedEvent.title}` : "Stay Connected"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder={selectedEvent ? `I'd like to join ${selectedEvent.title}` : "Your message"}
                rows={4}
              />
            </div>
            <div className="flex space-x-4">
              <Button className="flex-1 bg-primary-custom hover:bg-primary-dark">Send Message</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowContactForm(false)
                  setSelectedEvent(null)
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}