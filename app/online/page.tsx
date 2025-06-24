"use client"
import { useEffect, useState } from "react"
import { Calendar, Clock, Video, Leaf } from "lucide-react"
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
}

interface SheetEvent {
  Title: string
  Date: string
  Time: string
  Description: string
  Type: string
  Link: string
}

export default function OnlinePage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)
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
          date: formatDate(e.Date),
          time: e.Time,
          description: e.Description || "",
          type: e.Type || "Session",
          link: e.Link || "#",
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

  const formatDate = (dateString: string): string => {
    const [day, month, year] = dateString.split("/")
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day))
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (time: string): string => {
    const [hourStr, min] = time.split(":")
    const hour = parseInt(hourStr)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${min || "00"} ${ampm}`
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
              <Card key={event.id} className="hover:shadow-xl transition duration-300">
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
                    {formatTime(event.time)}
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-primary-custom hover:bg-primary-dark text-white py-2 px-4 rounded-lg"
                  >
                    <Video className="h-4 w-4 mr-2" /> Join Session
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

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
