"use client"
import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  Leaf,
  Heart,
  Wind,
  Play,
  Users,
  Calendar,
  MapPin,
  User,
  Move,
  Mail,
  Phone,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"
import Image from "next/image"
import { Video } from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const reviewsRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      name: "Simona Anna",
      text: 'Meeting Anandi and participating in her meditation classes was really a "Gift from the Universe". Each meditation was an opportunity of deep listening and healing ourselves. She was handling every moment with presence & an open heart. So grateful for all her sharing & teaching. Hope to get the chance to meet her again in early future!',
      image: "SA",
    },
    {
      name: "Monica",
      text: "Anandi has been such a beautiful addition to our lives. Working with her has truly been transformational for both me and my husband. She's given us tools to better regulate our nervous systems and helped us connect more deeply with our inner worlds - and with each other. Her sessions create such a safe, open space to release, reflect, and speak freely. We always leave feeling more grounded, connected, and understood. So grateful for her work!",
      image: "M",
    },
    {
      name: "Joanne",
      text: "I attended one of Anandi's Breathwork Sessions in Rishikesh, having never taken part in anything like this before. I felt an instant safe, genuine connection so I decided to keep in touch through taking online classes. We have been working on pranayama techniques, breathwork and kundalini yoga to remove stored emotional trauma which has ran my life for too long. Now, my life is being brought back up from this lovely caring soul! ❤️ So grateful 🌸 Thanking you so much for being in my life 🌸",
      image: "J",
    },
    {
      name: "Anjali",
      text: "As a yoga teacher myself, I was blown away by the depth, wisdom and love that anandi embodied in each session. Her facilitation was a masterclass in holding space, guiding exploration and nurturing growth. Over the 2-weeks, I felt my entire being unwind, calm and center. The practices, discussions and meditations were expertly woven together (…) anandi's guidance was instrumental in helping me navigate my chakra practice. Her insights and suggestions were practical, compassionate and empowering",
      image: "A",
    },
    {
      name: "Sine",
      text: "I really had a great time learning with Anandi. She created a warm and welcoming environment that made every lesson special. Her friendly and approachable nature, combined with the supportive atmosphere she fostered, made the whole experience truly wonderful. I would definitely recommend to anyone!",
      image: "S",
    },
    {
      name: "Dominique",
      text: "Was blessed with meeting Anandi and learning so much from her on both a personal and spiritual level! Really looking forward to coming to Sri Lanka for a course!",
      image: "D",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, reviews.length])

  useEffect(() => {
    if (reviewsRef.current) {
      const scrollWidth = reviewsRef.current.scrollWidth / reviews.length
      reviewsRef.current.scrollTo({
        left: currentReview * scrollWidth,
        behavior: "smooth",
      })
    }
  }, [currentReview, reviews.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimal */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-0.5 bg-primary-custom"></div>
                  <Leaf className="h-6 w-6 text-primary-custom" />
                  <div className="w-8 h-0.5 bg-primary-custom"></div>
                </div>
                <h1 className="font-merienda text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Prana Chitta Ashram
                </h1>
                <p className="font-merienda text-xl lg:text-2xl text-primary-custom font-medium italic mb-4">
                  Breathing into loving awareness
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Offering practices that support individuals in awakening their life energy and softening into the
                  wholeness of the present moment- available worldwide and online.
                </p>
                <Button
                  asChild
                  className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="#offerings">
                    Explore Our Offerings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
  src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750938287/Screenshot_2025-06-26_at_17.14.25_bqodcg.png"
  alt="Meditation and breathwork practice"
  width={600}
  height={400}
  className="w-full h-screen sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section with Image */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750761238/Screenshot_2025-06-24_at_16.01.46_wlcow7.png"
                alt="Peaceful meditation space"
                width={500}
                height={400}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-primary-custom mr-3" />
                  <h2 className="font-merienda text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <div className="w-16 h-1 bg-primary-custom mb-8"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to support individuals in awakening their life energy, releasing old patterns and
                  softening into the wholeness of the present moment - with{" "}
                  <em className="text-primary-custom font-semibold">prāṇa</em>, the vital force carried by the breath,
                  as the bridge between body and <em className="text-primary-custom font-semibold">chitta</em>, the
                  heart-mind and field of awareness.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our work is not based on one method or belief. It's shaped by real moments: breath that deepens, a
                  body that begins to trust again, a thought that loosens its grip.
                </p>
                <div className="bg-primary-custom/5 rounded-2xl p-6 border-l-4 border-primary-custom">
                  <p className="font-merienda text-xl text-primary-custom font-semibold italic">
                    You don't need to be "spiritual" to be here. Just willing to listen within.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Minimal */}
      <section id="offerings" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Offerings</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer in-person and online sessions, workshops, retreats and trauma-informed counselling support
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Breathwork & Pranayama",
                description: "Regulate the nervous system and release stored energetic blockages",
                icon: <Wind className="h-8 w-8" />,
              },
              {
                title: "Active & Passive Meditation",
                description: "Still the fluctuations of the mind through guided meditation techniques",
                icon: <Heart className="h-8 w-8" />,
              },
              {
                title: "Kundalini Kriya Yoga",
                description: "Purifying and harmonizing your life energy through breath, movement and deep inner focus",
                icon: <Move className="h-8 w-8" />,
              },
              {
                title: "Somatic Movement",
                description:
                  "Gentle, intuitive motion to release stored tension and reconnect with your body's natural wisdom.",
                icon: <Move className="h-8 w-8" />,
              },
              {
                title: "Silence & Inner Inquiry",
                description: "Gently meet what is ready to be seen and loved within you",
                icon: <Leaf className="h-8 w-8" />,
              },
              {
                title: "Cranio-Sacral Therapy",
                description: "Work through somato-emotional layers & release pain from injuries",
                icon: <Users className="h-8 w-8" />,
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-4 p-6 hover:bg-gray-50 rounded-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-custom/10 rounded-full text-primary-custom group-hover:bg-primary-custom group-hover:text-white transition-all duration-300">
                  {offer.icon}
                </div>
                <div>
                  <h3 className="font-merienda text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary-custom/5 rounded-2xl p-6 border-l-4 border-primary-custom max-w-2xl mx-auto">
            <p className="font-merienda text-xl text-primary-custom font-medium italic leading-relaxed">
              We create simple shared spaces to feel what it means to be alive, together.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Image */}
            <div>
              <img
                src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751174287/WhatsApp_Image_2025-06-28_at_20.15.41_mrtnxn.jpg"
                alt="Image 1"
                className="w-full h-64 sm:h-80 rounded-lg object-cover"
              />
            </div>
            {/* Second Image */}
            <div>
              <img
                src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751100866/WhatsApp_Image_2025-06-27_at_08.32.23_1_fuqxpz.jpg"
                alt="Image 2"
                className="w-full h-64 sm:h-80 rounded-lg object-cover"
              />
            </div>
            {/* Third Image */}
            <div>
              <img
                src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751100866/WhatsApp_Image_2025-06-27_at_08.32.23_djggks.jpg"
                alt="Image 3"
                className="w-full h-64 sm:h-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Our Offerings - New Design */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Experience Our Offerings</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us through online sessions or check out what is happening in person
            </p>
          </div>
          <div className="space-y-16">
            {/* Online Sessions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Video className="h-6 w-6 text-green-800" />
                  </div>
                  <h3 className="font-merienda text-3xl font-bold text-gray-900">Online Sessions</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join virtual sessions from anywhere in the world. Yoga, breathwork, guided meditation and more!
                </p>
                <Link href="/online">
                  <Button className="mt-6 bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Play className="mr-2 h-5 w-5" />
                    Explore Online Sessions
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1754816942/Screenshot_2025-08-10_at_14.35.20_furwjy.png"
                  alt="Online meditation session"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            {/* In-Person Events */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750761238/Screenshot_2025-06-24_at_16.01.55_hvt2qz.png"
                  alt="Ashram in-person session"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-custom" />
                  </div>
                  <h3 className="font-merienda text-3xl font-bold text-gray-900">In-Person Events</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience the power of collective practice in our offline sessions, workshops and retreats
                </p>
                <Link href="/offline">
                  <Button className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6">
                    <Calendar className="mr-2 h-5 w-5" />
                    View In-Person Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">About Prana Chitta Ashram</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Wind className="h-6 w-6 text-primary-custom" />
                  </div>
                  <div>
                    <h3 className="font-merienda text-2xl font-bold text-primary-custom mb-3">Prana</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The subtle breath of life - the unseen current flowing through everything that moves, grows and
                      awakens. Not just the air we breathe, but the living force that animates us from within.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-6 w-6 text-primary-custom" />
                  </div>
                  <div>
                    <h3 className="font-merienda text-2xl font-bold text-primary-custom mb-3">Chitta</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The field of awareness - the heart-mind where thoughts arise, emotions pass and stillness waits
                      beneath it all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side - Image space */}
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1754922215/WhatsApp_Image_2025-08-11_at_18.21.46-removebg-preview_fosqw4.png"
                alt="Prana Chitta Ashram"
                className="w-full h-64 sm:h-80 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-8 mt-10">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h4 className="font-merienda text-3xl font-bold text-gray-900 mb-6">The Unity of Breath and Awareness</h4>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Together, prāṇa and chitta hold the key to presence: When prāṇa flows freely, chitta becomes clear. One
                moves, one reflects. In their meeting, we return to the quiet intelligence of life itself.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751100336/WhatsApp_Image_2025-06-27_at_08.57.53_gm58yt.jpg"
                alt="Prana Chitta Ashram"
                className="w-full h-64 sm:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary-custom/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-primary-custom" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+91 84948 02474</p>
                <p className="text-sm text-gray-500 mt-1">Available daily 8AM–8PM</p>
              </div>
            </div>
            {/* Instagram */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-pink-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Instagram</h3>
                <p className="text-gray-600">@pranachittaashram</p>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </div>
            {/* Email */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                <p className="text-gray-600">pranachitta@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teacher Section with Image */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT SECTION */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-primary-custom mr-3" />
                  <h2 className="font-merienda text-3xl font-bold text-gray-900">Founder & <br></br> Main Facilitator</h2>
                </div>
                <div className="w-25 h-1 bg-primary-custom mb-8"></div>
              </div>
              {/* Description */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-xl lg:text-xl">
                <p>
                  Anandi brings over 17 years of dedicated practice and study in yoga, breathwork, meditation and
                  somatic healing—years of this spent in India learning through traditional methods. Her work weaves
                  together ancient wisdom traditions and modern therapeutic insight, offering a grounded, supportive
                  space for personal exploration. With a focus on nervous system regulation and emotional integration,
                  she guides people back to a deeper sense of presence.
                </p>
                <p>
                  Her educational background includes integrative bodywork, meditation, craniosacral therapy,
                  trauma-informed counseling and extensive teacher training in Hatha, Ashtanga and Vinyasa Yoga, as well
                  as initiation into Kriya Yoga. She has special interest and experience in conscious connected
                  breathwork, advanced pranayama and subtle energy work through the lens of the chakra system. She is
                  also certified in Pre- and Postnatal Yoga, guided by Ayurvedic principles and has a holistic
                  understanding of the feminine journey.
                </p>
                <p>
                  Anandi facilitates both active and still practices, drawing inspiration from traditional Tantra,
                  Osho's active meditations, the clarity and presence of Buddhist Mahamudra, the heart-opening path of
                  Sufism and the devotional spirit of mantra chanting and Bhakti Yoga.
                </p>
                <p>
                  She works with individuals and groups with compassion and respect, meeting each person where they are.
                </p>
              </div>
              {/* Quote */}
              <div className="bg-primary-custom/5 rounded-2xl p-6 border-l-4 border-primary-custom">
                <p className="font-merienda text-xl text-primary-custom font-semibold italic">
                  "My work is to create spaces where people can remember their own wholeness — where breath becomes a
                  bridge back to the wisdom that lives within."
                </p>
              </div>
              {/* Button */}
              <Button
                asChild
                className="mt-6 bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="/contact">Get in touch</a>
              </Button>
            </div>
            {/* IMAGE SECTION */}
            <div className="mb-12 lg:mb-0">
              <div className="w-full overflow-hidden shadow-2xl rounded-lg">
                <Image
                  src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1754816940/Screenshot_2025-08-10_at_14.26.40_gogola.png"
                  alt="anandi - Teacher and Founder"
                  width={520}
                  height={520}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <>
        <div className="text-center mb-8">
          <h2 className="text-5xl font-merienda font-bold text-primary-custom py-7">Reviews</h2>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary-custom text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary-custom/80 transition sm:flex"
            style={{ zIndex: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-custom text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary-custom/80 transition sm:flex"
            style={{ zIndex: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="overflow-x-auto px-2">
            <div
              ref={reviewsRef}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex space-x-8 pb-4"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                overflowX: "auto",
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-custom rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {review.image}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">-{review.name}</h4>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 bg-primary-custom text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h2 className="font-merienda text-4xl font-bold mb-6">Begin Your Journey Within</h2>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the community and receive gentle guidance and inspiration for your inner journey
          </p>
          <div>
            <Button
              asChild
              className="bg-white text-primary-custom hover:bg-white/90 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        title="Contact for Booking Enquiry"
      />
    </div>
  )
}
