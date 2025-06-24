"use client"
import { useState, useEffect } from "react"
import { Heart, Phone, Mail, MapPin, Clock, Sparkles, Users, Star, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"

// ✅ Define type for session itemss
type Session = {
  duration: string
  price: string
  popular: boolean
  note?: string
}

// ✅ Type for pricing data
const pricingData: {
  [key: string]: {
    title: string
    icon: JSX.Element
    sessions: Session[]
  }
} = {
  individual: {
    title: "1:1 Sessions",
    icon: <Users className="h-6 w-6" />,
    sessions: [
      { duration: "1 hour", price: "35€", popular: false },
      { duration: "1.5 hours", price: "40€", popular: true },
    ],
  },
  bundles: {
    title: "Session Bundles",
    icon: <Sparkles className="h-6 w-6" />,
    sessions: [
      { duration: "4 × 1h", price: "135€", popular: false },
      { duration: "4 × 1.5h", price: "150€", popular: true },
    ],
  },
  group: {
    title: "Group Sessions",
    icon: <Users className="h-6 w-6" />,
    sessions: [
      { duration: "4-session bundle", price: "55€", popular: true },
      { duration: "Drop-in (single session)", price: "15€", popular: false },
    ],
  },
  couples: {
    title: "Couples Breathwork",
    icon: <Heart className="h-6 w-6" />,
    sessions: [
      {
        duration: "Single 2-hour session",
        price: "65€ per couple",
        popular: false,
      },
      {
        duration: "Bundle (4 × 2h)",
        price: "240€",
        note: "60€ per session",
        popular: true,
      },
    ],
  },
}

export default function OfflinePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setShowContactForm(true)
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-0.5 bg-primary-custom mr-3"></div>
              <Leaf className="h-6 w-6 text-primary-custom" />
              <div className="w-8 h-0.5 bg-primary-custom ml-3"></div>
            </div>
            <h1 className="font-merienda text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
              In-Person
              <span className="text-primary-custom block mt-2">Sessions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover what's happening on the ground in Prāṇa Chitta Ashram and how you can join us in person for
              transformative breathwork and meditation experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Session Pricing</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the format that best supports your healing journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(pricingData).map(([key, category], categoryIndex) => (
              <div
                key={key}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                  key === "bundles" ? "border-2 border-primary-custom/20" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                {key === "bundles" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-custom text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-custom/10 rounded-full mb-4">
                    <div className="text-primary-custom">{category.icon}</div>
                  </div>
                  <h3 className="font-merienda text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {category.sessions.map((session, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        session.popular
                          ? "bg-primary-custom/5 border-2 border-primary-custom/20"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      {session.popular && (
                        <div className="text-xs text-primary-custom font-medium mb-2">Recommended</div>
                      )}

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium block">{session.duration}</span>
                          {session.note && <span className="text-sm text-gray-500 mt-1 block">→ {session.note}</span>}
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary-custom">{session.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBooking(category.title)}
                  className="w-full bg-primary-custom hover:bg-primary-dark text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book {category.title}
                </Button>
              </div>
            ))}
          </div>

          {/* Financial Support */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-lg border-l-4 border-primary-custom">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-custom/10 rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary-custom" />
              </div>

              <h3 className="font-merienda text-2xl font-bold text-gray-900 mb-4">Financial Support</h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                If you're in a low-income situation, please reach out. We're happy to find a solution together. Our
                mission is to make these practices accessible to all who feel called to this work.
              </p>

              <Button
                onClick={() => {
                  setSelectedService("Financial Support")
                  setShowContactForm(true)
                }}
                className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Join Us In Person</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Experience the power of community and shared practice</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Location",
                subtitle: "Kandy, Sri Lanka",
                description: "Nestled in nature's embrace",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Contact",
                subtitle: "Reach out for sessions",
                description: "We're here to support you",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Schedule",
                subtitle: "By appointment",
                description: "Flexible timing available",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-custom/10 rounded-full mb-6 group-hover:bg-primary-custom group-hover:text-white transition-all duration-300">
                  <div className="text-primary-custom group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-merienda text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-primary-custom font-semibold mb-2">{item.subtitle}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/contact">Schedule your Visit</a>
            </Button>
          </div>
        </div>
      </section>

      <ContactForm
        isOpen={showContactForm}
        onClose={() => {
          setShowContactForm(false)
          setSelectedService(null)
        }}
        title={selectedService ? `Book: ${selectedService}` : "Contact Us"}
      />
    </div>
  )
}
