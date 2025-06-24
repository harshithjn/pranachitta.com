"use client"
import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  Video,
  Plus,
  Edit,
  Trash2,
  Wifi,
  Monitor,
  Heart,
  Globe,
  Users,
  Download,
  Headphones,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"

interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  image: string
  type: "meditation" | "breathwork" | "yoga" | "workshop"
}

export default function OnlinePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Morning Meditation & Breathwork",
      date: "2024-01-15",
      time: "07:00",
      description:
        "Start your day with gentle meditation and conscious breathing practices. Perfect for beginners and experienced practitioners alike.",
      image: "/placeholder.svg?height=200&width=300",
      type: "meditation",
    },
    {
      id: "2",
      title: "Pranayama Deep Dive",
      date: "2024-01-18",
      time: "19:00",
      description:
        "An intensive session exploring advanced breathing techniques and their effects on the nervous system.",
      image: "/placeholder.svg?height=200&width=300",
      type: "breathwork",
    },
    {
      id: "3",
      title: "Hatha Yoga Flow",
      date: "2024-01-20",
      time: "18:30",
      description: "Gentle yoga practice focusing on alignment, breath awareness, and mindful movement.",
      image: "/placeholder.svg?height=200&width=300",
      type: "yoga",
    },
  ])

  const [showEventForm, setShowEventForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    image: "/placeholder.svg?height=200&width=300",
    type: "meditation" as Event["type"],
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Wifi className="h-5 w-5" />,
      title: "Live Sessions",
      description: "Join real-time breathwork and meditation sessions with interactive guidance and community support.",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Recorded Practices",
      description: "Access our library of recorded sessions, meditations, and healing practices anytime.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Global Community",
      description: "Connect with like-minded souls on their healing journey from around the world.",
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "HD Streaming",
      description: "Crystal clear video quality ensures you don't miss any important visual cues or techniques.",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Audio-Only Option",
      description: "Practice with audio-only sessions when you need to focus purely on breath and internal awareness.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Flexible Access",
      description: "Join from any device - phone, tablet, or computer - wherever you feel most comfortable.",
    },
  ]

  const handleCreateEvent = () => {
    const event: Event = {
      id: Date.now().toString(),
      ...newEvent,
    }
    setEvents([...events, event])
    setNewEvent({
      title: "",
      date: "",
      time: "",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      type: "meditation",
    })
    setShowEventForm(false)
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setNewEvent({
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
      image: event.image,
      type: event.type,
    })
    setShowEventForm(true)
  }

  const handleUpdateEvent = () => {
    if (editingEvent) {
      setEvents(events.map((event) => (event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event)))
      setEditingEvent(null)
      setNewEvent({
        title: "",
        date: "",
        time: "",
        description: "",
        image: "/placeholder.svg?height=200&width=300",
        type: "meditation",
      })
      setShowEventForm(false)
    }
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  const getTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "meditation":
        return "bg-purple-100 text-purple-800"
      case "breathwork":
        return "bg-blue-100 text-blue-800"
      case "yoga":
        return "bg-green-100 text-green-800"
      case "workshop":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-0.5 bg-primary-custom mr-3"></div>
              <Leaf className="h-6 w-6 text-primary-custom" />
              <div className="w-8 h-0.5 bg-primary-custom ml-3"></div>
            </div>
            <h1 className="font-merienda text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
              Online
              <span className="text-primary-custom block mt-2">Sessions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Join our virtual community for guided meditation, breathwork, and yoga sessions from the comfort of your
              home. Everything you need for your healing journey, accessible from anywhere in the world.
            </p>

            {/* Admin Button */}
            
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Our Online Platform</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our digital sanctuary where distance dissolves and hearts connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-custom/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-primary-custom">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-merienda text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Join our live online sessions and connect with our global community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => handleEditEvent(event)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <h3 className="font-merienda text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                  <Button
                    onClick={() => {
                      setSelectedEvent(event)
                      setShowContactForm(true)
                    }}
                    className="w-full bg-primary-custom hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-primary-custom">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-merienda text-4xl font-bold text-white mb-4">More Sessions Coming Soon</h2>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're preparing beautiful online experiences for you. Stay tuned for our upcoming virtual sessions and
            digital offerings that will deepen your practice and connection.
          </p>
          <Button
            onClick={() => setShowContactForm(true)}
            className="bg-white text-primary-custom hover:bg-white/90 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Stay Connected
          </Button>
        </div>
      </section>

      {/* Event Form Dialog */}
      <Dialog open={showEventForm} onOpenChange={setShowEventForm}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-merienda text-primary-custom">
              {editingEvent ? "Edit Session" : "Create New Session"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Session Title</Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter session title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="type">Session Type</Label>
              <select
                id="type"
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as Event["type"] })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="meditation">Meditation</option>
                <option value="breathwork">Breathwork</option>
                <option value="yoga">Yoga</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Enter session description"
                rows={4}
              />
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={editingEvent ? handleUpdateEvent : handleCreateEvent}
                className="flex-1 bg-primary-custom hover:bg-primary-dark"
              >
                {editingEvent ? "Update Session" : "Create Session"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowEventForm(false)
                  setEditingEvent(null)
                  setNewEvent({
                    title: "",
                    date: "",
                    time: "",
                    description: "",
                    image: "/placeholder.svg?height=200&width=300",
                    type: "meditation",
                  })
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ContactForm
        isOpen={showContactForm}
        onClose={() => {
          setShowContactForm(false)
          setSelectedEvent(null)
        }}
        title={selectedEvent ? `Join: ${selectedEvent.title}` : "Stay Connected"}
      />
    </div>
  )
}
