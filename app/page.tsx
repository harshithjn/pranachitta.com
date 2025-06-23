"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, Leaf, Heart, Wind, Play, Users, Award, Quote, Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const reviewsRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      name: "Monica",
      text: "Gitana has been such a beautiful addition to our lives. Working with her has truly been transformational for both me and my husband. She's given us tools to better regulate our nervous systems and helped us connect more deeply with our inner worlds - and with each other. Her sessions create such a safe, open space to release, reflect, and speak freely. We always leave feeling more grounded, connected, and understood. So grateful for her work!",
      image: "M",
    },
    {
      name: "Joanne",
      text: "I attended one of Gitana's Breathwork Sessions in Rishikesh, having never taken part in anything like this before. I felt an instant safe, genuine connection so I decided to keep in touch through taking online classes. We have been working on pranayama techniques, breathwork and kundalini yoga to remove stored emotional trauma which has ran my life for too long. Now, my life is being brought back up from this lovely caring soul! ❤️ So grateful 🌸 Thanking you so much for being in my life 🌸",
      image: "J",
    },
    {
      name: "Sine",
      text: "I really had a great time learning with Gitana. She created a warm and welcoming environment that made every lesson special. Her friendly and approachable nature, combined with the supportive atmosphere she fostered, made the whole experience truly wonderful. I would definitely recommend to anyone!",
      image: "S",
    },
    {
      name: "Dominique",
      text: "Was blessed with meeting Gitana and learning so much from her on both a personal and spiritual level! Really looking forward to coming to Sri Lanka for a course!",
      image: "D",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Auto-scroll reviews
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  useEffect(() => {
    if (reviewsRef.current) {
      const scrollWidth = reviewsRef.current.scrollWidth / reviews.length
      reviewsRef.current.scrollTo({
        left: currentReview * scrollWidth,
        behavior: "smooth",
      })
    }
  }, [currentReview, reviews.length])

  const ContactForm = () => (
    <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-green-700">Contact for Booking Enquiry</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            // Handle form submission here
            alert("Thank you for your enquiry! We will get back to you soon.")
            setShowContactForm(false)
          }}
        >
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input placeholder="Phone Number" />
          <Textarea placeholder="Tell us about your interest and any questions you have..." rows={4} />
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Send Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-green-300/20 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-300/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-300/25 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-10">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Decorative element above title */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
                  <Leaf className="h-8 w-8 text-green-600" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-500"></div>
                </div>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold text-gray-800 leading-tight mb-6 tracking-tight">
                PRANA CHITTA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block mt-2">
                  ASHRAM
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-green-700 font-medium italic leading-relaxed">
                  Breathing into loving awareness
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                  Meditation Center & Ashram for the living heart-mind
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                onClick={() => setShowContactForm(true)}
              >
                Begin Your Journey
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-5 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
  <Link href="#offerings">
    <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
    Explore Our Offerings
  </Link>
</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-green-100 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed text-center font-light">
                Our mission is to support individuals in awakening their life energy, releasing old patterns and
                softening into the wholeness of the present moment - with{" "}
                <em className="text-green-600 font-semibold">prāṇa</em>, the vital force carried by the breath, as the
                bridge between body and <em className="text-green-600 font-semibold">citta</em>, the heart-mind and
                field of awareness.
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto"></div>
              <p className="text-xl text-gray-700 leading-relaxed text-center font-light">
                Our work is not based on one method or belief. It's shaped by real moments: breath that deepens, a body
                that begins to trust again, a thought that loosens its grip. Through guided breathwork, meditation and
                movement, as well as counselling and therapeutic support, we create a space where inner life can come
                forward - naturally, gently, in its own time.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <p className="text-2xl text-green-700 font-semibold text-center italic leading-relaxed">
                  You don't need to be "spiritual" to be here. Just willing to listen within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Image */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750670053/Screenshot_2025-06-23_at_14.42.02_zjztcm.png"
            alt="Practice meditation and breathwork"
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* What We Offer - Enhanced Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">Our Offerings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer in-person and online sessions, retreats and trauma-informed counselling support - weaving
              together ancient wisdom with modern understanding
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Active & Passive Meditation",
                subtitle: "Awareness Practices",
                description:
                  "Still the fluctuations of the mind and work with present moment awareness through guided meditation techniques",
                icon: <Heart className="h-10 w-10" />,
                gradient: "from-rose-400 to-pink-500",
                bgColor: "bg-rose-50",
                borderColor: "border-rose-200",
              },
              {
                title: "Pranayama & Breathwork",
                subtitle: "Nervous System Regulation",
                description:
                  "Regulate the nervous system and release stored energetic blockages through conscious breathing practices",
                icon: <Wind className="h-10 w-10" />,
                gradient: "from-blue-400 to-cyan-500",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                title: "Conscious Movement",
                subtitle: "Embodied Presence",
                description:
                  "Awaken presence in the body and integrate healing through gentle, conscious movement practices",
                icon: <Users className="h-10 w-10" />,
                gradient: "from-purple-400 to-violet-500",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                title: "Silence & Inner Inquiry",
                subtitle: "Deep Listening",
                description:
                  "Gently meet what is ready to be seen and loved within you through contemplative practices",
                icon: <Leaf className="h-10 w-10" />,
                gradient: "from-green-400 to-emerald-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                title: "Cranio-Sacral Therapy",
                subtitle: "Somatic Healing",
                description:
                  "Release pain from injuries and work through somato-emotional layers with gentle therapeutic touch",
                icon: <Award className="h-10 w-10" />,
                gradient: "from-amber-400 to-orange-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
              },
            ].map((offer, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${offer.bgColor} ${offer.borderColor} border-2 overflow-hidden relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${offer.gradient} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-sm font-medium text-green-600 mb-4 uppercase tracking-wide">{offer.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {offer.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${offer.gradient} rounded-full`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom section with enhanced styling */}
          
        </div>
      </section>

      {/* Services Navigation - Fixed overlapping issue */}
      <section
  id="offerings"
  className="py-32 px-4 bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 relative z-20"
>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Choose Your Path</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our offerings through in-person sessions or join our online community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 relative z-30">
            {/* Online Sessions Card */}
            <div className="space-y-8">
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750670053/Screenshot_2025-06-23_at_14.41.32_snjihv.png"
                alt="Online meditation sessions"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <Link href="/online">
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 relative z-40">
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Users className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                        Online Sessions
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        Explore our online spaces for guided practices and programs you can join from anywhere.
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 group-hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold rounded-full shadow-lg">
                      <Play className="mr-3 h-5 w-5" />
                      Explore Online Sessions
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Offline Sessions Card */}
            <div className="space-y-8">
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750670053/Screenshot_2025-06-23_at_14.41.42_jsz1xn.png"
                alt="In-person ashram sessions"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <Link href="/offline">
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full transform hover:-translate-y-3 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 relative z-40">
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <MapPin className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors">
                        In-Person Sessions
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        Discover what's happening on the ground in Prana Chitta Ashram and how you can join us in
                        person.
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 group-hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold rounded-full shadow-lg">
                      <Calendar className="mr-3 h-5 w-5" />
                      View In-Person Events
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Prana Chitta Ashram - More Professional */}
      <section className="py-40 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <Wind className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">About Prana Chitta Ashram</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <Wind className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">Prana</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The subtle breath of life - the unseen current flowing through everything that moves, grows and
                    awakens. Not just the air we breathe, but the living force that animates us from within.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700">Chitta</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The field of awareness - the heart-mind where thoughts arise, emotions pass and stillness waits
                    beneath it all.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-3xl font-bold text-gray-800 mb-8">The Unity of Breath and Awareness</h4>
                <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                  Together, prana and chitta hold the key to presence: When prana flows freely, chitta becomes clear.
                  One moves, one reflects. In their meeting, we return to the quiet intelligence of life itself.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wind className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Breathwork</h5>
                    <p className="text-gray-600">Conscious breathing practices to regulate the nervous system</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Meditation</h5>
                    <p className="text-gray-600">Cultivating awareness and presence in the heart-mind</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Integration</h5>
                    <p className="text-gray-600">Bringing practice into daily life with conscious living</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teacher Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <User className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">About the Teacher</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750673501/Screenshot_2025-06-23_at_15.41.09_yp3d2y.png"
                      alt="Teacher portrait"
                      width={200}
                      height={200}
                      className="w-48 h-48 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Gitana</h3>
                    <p className="text-xl text-green-600 font-semibold mb-6">Founder & Guide</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Gitana brings years of dedicated practice and study in breathwork, meditation, and somatic healing.
                    Her approach is rooted in both ancient wisdom traditions and modern therapeutic understanding,
                    creating a safe and nurturing space for transformation.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Having trained in various modalities including Pranayama, Cranio-Sacral Therapy, and trauma-informed
                    practices, she guides individuals and groups with compassion, authenticity, and deep respect for
                    each person's unique journey.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                    <p className="text-lg text-green-700 italic font-medium text-center">
                      "My work is to create spaces where people can remember their own wholeness - where breath becomes
                      a bridge back to the wisdom that lives within."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ashram - Enhanced */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">The Ashram</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-8 py-3 border border-green-200">
              <span className="text-2xl mr-2">📍</span>
              <p className="text-xl text-green-700 font-semibold">Opening Soon • Kandy, Sri Lanka</p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-green-100 space-y-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    The word ashram comes from the Sanskrit root <em className="text-green-600 font-semibold">śram</em>,
                    meaning both effort and rest. It is a place of dedicated practice and simple living.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    The ashram in Kandy is a quiet refuge nestled in nature, where life follows the rhythm of deepening
                    breath, growing awareness and simple, conscious living.
                  </p>
                </div>
                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Here, we live and practice together - we breathe, cook, move, sit in silence, tend to the garden and
                    share with honesty and care.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Rooted in the principles of conscious living and sattva, we share space with a commitment to
                    non-harming in thought, word and action - toward ourselves, one another and all living beings.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-10 text-center">
                <p className="text-2xl text-green-700 font-semibold italic leading-relaxed mb-8">
                  Whether you come for a week, a season, or longer, this is a space to come home. To breathe more
                  deeply, unlearn what is no longer needed, and remember what has always been within you.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact for Booking Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750670053/Screenshot_2025-06-23_at_14.41.42_jsz1xn.png"
            alt="Community gathering and meditation"
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Reviews Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-200/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-lg">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Reviews</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">Voices from Our Community</p>
          </div>

          <div className="relative">
            <div
              ref={reviewsRef}
              className="flex overflow-x-hidden space-x-8 pb-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-96 border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <CardContent className="p-8 relative">
                    {/* Background gradient */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-xl opacity-50"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                          {review.image}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">-{review.name}</h4>
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="h-8 w-8 text-green-200 absolute -top-3 -left-3" />
                        <p className="text-gray-600 italic pl-6 leading-relaxed text-lg font-light">{review.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced navigation dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced (removed border) */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Begin Your Journey Within</h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8"></div>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our community and receive gentle guidance, breathwork practices, and inspiration for your inner
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-green-100 rounded-full px-6 py-4 text-lg backdrop-blur-sm focus:bg-white/30 transition-all"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
