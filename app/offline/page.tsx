"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, MapPin, Leaf, FileText, ExternalLink, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'

interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  type: string
  location: string
  attachment?: string
}

interface SheetEvent {
  Title?: string
  Date?: string
  Time?: string
  Description?: string
  Type?: string
  Location?: string
  Attachment?: string
  [key: string]: any // Allow for flexible column names
}

export default function OfflinePage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchEventsFromSheet()
  }, [])

  const fetchEventsFromSheet = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log("Fetching from:", "https://opensheet.elk.sh/1jUQvRqrZoDeiZfMfBfYtLvs2vr18itxh6RVjIkYb8SI/Sheet1")
      
      const response = await fetch("https://opensheet.elk.sh/1jUQvRqrZoDeiZfMfBfYtLvs2vr18itxh6RVjIkYb8SI/Sheet1")
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data: SheetEvent[] = await response.json()
      console.log("Raw data from sheet:", data)

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received from sheet")
      }

      if (data.length === 0) {
        setEvents([])
        setError(null)
        return
      }

      // Check what columns are available
      console.log("Available columns:", Object.keys(data[0] || {}))

      const parsedEvents: Event[] = data
        .filter((e) => {
          // More flexible filtering - check for any title-like field
          const hasTitle = e.Title || e.title || e.Name || e.name
          const hasDate = e.Date || e.date
          const hasTime = e.Time || e.time
          return hasTitle && hasDate && hasTime
        })
        .map((e, index) => ({
          id: `event-${index}`,
          title: e.Title || e.title || e.Name || e.name || "Untitled Session",
          date: e.Date || e.date || "TBA", // Display as-is from sheet
          time: e.Time || e.time || "TBA", // Display as-is from sheet
          description: e.Description || e.description || e.Details || e.details || "",
          type: e.Type || e.type || e.Category || e.category || "Session",
          location: e.Location || e.location || e.Venue || e.venue || "TBA",
          attachment: e.Attachment || e.attachment || e.Link || e.link || "",
        }))

      console.log("Parsed events:", parsedEvents)
      setEvents(parsedEvents)
      setError(null)
    } catch (err) {
      console.error("Fetch error:", err)
      setError(`Failed to fetch events: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleViewDetails = (e: React.MouseEvent, event: Event) => {
    e.stopPropagation() // Prevent card click
    setSelectedEvent(event)
    setShowPreview(true)
  }

  const handleBookSession = (e: React.MouseEvent, event: Event) => {
    e.stopPropagation() // Prevent card click
    router.push('/contact')
  }

  const handleViewAttachment = () => {
    if (selectedEvent?.attachment) {
      window.open(selectedEvent.attachment, '_blank')
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
        <h1 className="font-merienda text-5xl font-bold text-gray-900 mb-6">In-Person <span className="text-primary-custom block mt-2">Sessions</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the power of presence in our sacred spaces. Join us for transformative in-person sessions, workshops, and retreats.
        </p>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center">
            <p className="text-gray-500">Loading events...</p>
          </div>
        ) : error ? (
          <div className="text-center space-y-4">
            <p className="text-red-500">{error}</p>
            <Button 
              onClick={fetchEventsFromSheet}
              variant="outline"
              className="mx-auto"
            >
              Try Again
            </Button>
            <div className="text-sm text-gray-500 max-w-md mx-auto">
              <p>Make sure your Google Sheet is:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Publicly accessible (Anyone with link can view)</li>
                <li>Published to the web</li>
                <li>Has columns: Title, Date, Time, Description, Type, Location, Attachment</li>
              </ul>
            </div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500">No sessions scheduled yet.</p>
            <Button 
              onClick={fetchEventsFromSheet}
              variant="outline"
              className="mt-4"
            >
              Refresh
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="hover:shadow-xl transition duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
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
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  {event.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  )}
                  
                  {/* Button Row */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={(e) => handleBookSession(e, event)}
                      className="flex-1 inline-flex items-center justify-center bg-primary-custom hover:bg-primary-dark text-white py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      Book
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
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
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
                  <MapPin className="h-5 w-5 mr-3 text-primary-custom" />
                  <span className="font-medium">{selectedEvent.location}</span>
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
                  onClick={() => {
                    setShowPreview(false)
                    router.push('/contact')
                  }}
                  className="flex-1 bg-primary-custom hover:bg-primary-dark text-white"
                >
                  Book This Session
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
    </div>
  )
}