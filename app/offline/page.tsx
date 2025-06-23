'use client';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Users, Star, Calendar, Phone, Plus, Edit, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price: string;
  image?: string;
}

export default function Offline() {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Breathwork & Meditation Circle',
      date: '2024-02-15',
      time: '18:00',
      description: 'Join us for a gentle evening of breathwork and meditation in our sacred space. Perfect for beginners and experienced practitioners alike.',
      price: '€35'
    },
    {
      id: '2',
      title: 'Weekend Healing Retreat',
      date: '2024-02-24',
      time: '09:00',
      description: 'A transformative two-day retreat combining breathwork, movement, and inner inquiry in the beautiful surroundings of our ashram.',
      price: '€180'
    }
  ]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    price: '',
    image: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      ...eventForm
    };
    setEvents([...events, newEvent]);
    setEventForm({ title: '', date: '', time: '', description: '', price: '', image: '' });
    setShowEventForm(false);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
      price: event.price,
      image: event.image || ''
    });
    setShowEventForm(true);
  };

  const handleUpdateEvent = () => {
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...editingEvent, ...eventForm }
          : event
      ));
      setEditingEvent(null);
      setEventForm({ title: '', date: '', time: '', description: '', price: '', image: '' });
      setShowEventForm(false);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const handleBooking = async () => {
    if (!selectedEvent) return;
    
    const emailData = {
      to: 'hello@pranachitta.com',
      subject: `Booking Request: ${selectedEvent.title}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Event:</strong> ${selectedEvent.title}</p>
        <p><strong>Date:</strong> ${selectedEvent.date} at ${selectedEvent.time}</p>
        <p><strong>Name:</strong> ${bookingForm.name}</p>
        <p><strong>Email:</strong> ${bookingForm.email}</p>
        <p><strong>Phone:</strong> ${bookingForm.phone}</p>
        <p><strong>Message:</strong> ${bookingForm.message}</p>
      `
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });
      
      if (response.ok) {
        alert('Booking request sent successfully!');
        setShowBookingForm(false);
        setBookingForm({ name: '', email: '', phone: '', message: '' });
        setSelectedEvent(null);
      }
    } catch (error) {
      alert('Error sending booking request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              In-Person
              <span className="text-green-600 block mt-2">Sacred Gatherings</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Experience the transformative power of breathwork and meditation in our peaceful ashram. 
              Join us for intimate gatherings where healing happens naturally, in community.
            </p>
            
            {/* Admin Toggle */}
    
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-16">
            <div className="text-center flex-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Join us for these transformative gatherings</p>
            </div>
            {isAdmin && (
              <Button 
                onClick={() => setShowEventForm(true)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={event.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  {event.image && (
                    <div className="w-full h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-green-800">Event Image</span>
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 flex-1">{event.title}</h3>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      {event.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-2 text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                  
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowBookingForm(true);
                      }}
                    >
                      Book Now
                    </Button>
                    
                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleEditEvent(event)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Form Dialog */}
      <Dialog open={showEventForm} onOpenChange={setShowEventForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Event Title"
              value={eventForm.title}
              onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
            />
            <Input
              type="date"
              value={eventForm.date}
              onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
            />
            <Input
              type="time"
              value={eventForm.time}
              onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
            />
            <Input
              placeholder="Price (e.g., €35)"
              value={eventForm.price}
              onChange={(e) => setEventForm({...eventForm, price: e.target.value})}
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none h-24"
              placeholder="Event Description"
              value={eventForm.description}
              onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
            />
            <div className="flex gap-2">
              <Button 
                onClick={editingEvent ? handleUpdateEvent : handleAddEvent}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {editingEvent ? 'Update Event' : 'Add Event'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowEventForm(false);
                  setEditingEvent(null);
                  setEventForm({ title: '', date: '', time: '', description: '', price: '', image: '' });
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Book: {selectedEvent?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              value={bookingForm.name}
              onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={bookingForm.email}
              onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              value={bookingForm.phone}
              onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none h-24"
              placeholder="Any questions or special requirements?"
              value={bookingForm.message}
              onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
            />
            <div className="flex gap-2">
              <Button 
                onClick={handleBooking}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Send Booking Request
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedEvent(null);
                  setBookingForm({ name: '', email: '', phone: '', message: '' });
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Ashram Information */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Sacred Space</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prana Chitta Ashram is designed as a sanctuary for healing and transformation. Every element has been carefully chosen to support your journey towards inner peace and awakening.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Sacred Valley, Peaceful Mountains</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">+31 (0) 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Sessions by appointment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-green-800">
                  <MapPin className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">Ashram Image</p>
                  <p className="text-sm opacity-75">Sacred space photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}