"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, Leaf, Heart, Wind, Play, Users, Award, Quote, Calendar, MapPin, User , Move} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    text: 'Meeting Gitana and participating in her meditation classes was really a "Gift from the Universe". Each meditation was an opportunity of deep listening and healing ourselves. She was handling every moment with presence & an open heart. So grateful for all her sharing & teaching. Hope to get the chance to meet her again in early future!',
    image: "SA",
  },
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
    name: "Anjali",
    text: "As a yoga teacher myself, I was blown away by the depth, wisdom and love that Gitana embodied in each session. Her facilitation was a masterclass in holding space, guiding exploration and nurturing growth. Over the 2-weeks, I felt my entire being unwind, calm and center. The practices, discussions and meditations were expertly woven together (…) Gitana's guidance was instrumental in helping me navigate my chakra practice. Her insights and suggestions were practical, compassionate and empowering",
    image: "A",
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
                className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-0.5 bg-primary-custom"></div>
                  <Leaf className="h-6 w-6 text-primary-custom" />
                  <div className="w-8 h-0.5 bg-primary-custom"></div>
                </div>

                <h1 className="font-merienda text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Prana Chitta
                  <span className="block text-primary-custom mt-2">Ashram</span>
                </h1>

                <p className="font-merienda text-xl lg:text-2xl text-primary-custom font-medium italic mb-4">
                  Breathing into loving awareness
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A meditation center and ashram for the living heart-mind, supporting individuals in awakening their life energy and softening into the wholeness of the present moment.
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
                height={500}
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
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

  <div className="max-w-6xl mx-auto px-4 mt-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* First Image */}
    <div>
      <img 
        src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751174288/WhatsApp_Image_2025-06-28_at_20.15.42_pltifx.jpg" 
        alt="Image 1" 
        className="w-full h-auto rounded-lg object-cover aspect-video"
      />
    </div>

    {/* Second Image */}
    <div>
      <img 
        src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751174287/WhatsApp_Image_2025-06-28_at_20.15.41_mrtnxn.jpg" 
        alt="Image 2" 
        className="w-full h-auto rounded-lg object-cover aspect-video"
      />
    </div>

    {/* Third Image */}
    <div>
      <img 
        src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751100866/WhatsApp_Image_2025-06-27_at_08.32.23_djggks.jpg" 
        alt="Image 3" 
        className="w-full h-auto rounded-lg object-cover aspect-video"
      />
    </div>
  </div>
</div>


      {/* What We Offer - Minimal */}
      <section id="offerings" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Right side - Content (appears first on mobile and desktop) */}
          <div className="lg:order-2">
            <div className="text-center lg:text-left mb-16">
              <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Our Offerings</h2>
              <div className="w-16 h-1 bg-primary-custom mx-auto lg:mx-0 mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer in-person and online sessions, retreats and trauma-informed counselling support
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  title: "Active & Passive Meditation",
                  description: "Still the fluctuations of the mind through guided meditation techniques",
                  icon: <Heart className="h-8 w-8" />,
                },
                {
                  title: "Pranayama & Breathwork",
                  description: "Regulate the nervous system and release stored energetic blockages",
                  icon: <Wind className="h-8 w-8" />,
                },
                {
                  title: "Conscious Movement",
                  description: "Awaken presence in the body through gentle, conscious movement practices",
                  icon: <Move className="h-8 w-8" />,
                },
                {
                  title: "Silence & Inner Inquiry",
                  description: "Gently meet what is ready to be seen and loved within you",
                  icon: <Leaf className="h-8 w-8" />,
                },
                {
                  title: "Cranio-Sacral Therapy",
                  description: "Release pain from injuries and work through somato-emotional layers",
                  icon: <Users className="h-8 w-8" />,
                },
              ].map((offer, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 hover:bg-gray-50 rounded-2xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-custom/10 rounded-full text-primary-custom group-hover:bg-primary-custom group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {offer.icon}
                  </div>
                  <div>
                    <h3 className="font-merienda text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left side - Image and Quote (appears after content on mobile, left side on desktop) */}
          <div className="space-y-8 lg:order-1">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-[9/16] rounded-lg flex items-center justify-center bg-transparent">
                <img 
                  src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750937994/Screenshot_2025-06-26_at_17.09.03_wsa0nz.png" 
                  alt="Our Offerings" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-primary-custom/5 rounded-2xl p-6 border-l-4 border-primary-custom">
              <p className="font-merienda text-xl text-primary-custom font-medium italic leading-relaxed">
                We create simple shared spaces to feel what it means to be alive, together.
              </p>
            </div>
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
              Join us through online sessions or visit our ashram in person
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
                  Join our virtual community for guided meditation, breathwork, and yoga sessions. Experience the power
                  of collective practice from anywhere in the world.
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
                  src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750761230/Screenshot_2025-06-24_at_15.59.32_pn7daq.png"
                  alt="Online meditation session"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
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
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
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
                  Immerse yourself in transformative retreats and workshops at our ashram in Kandy, Sri Lanka.
                  Experience deep healing in a supportive community environment.
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
    src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751099994/Screenshot_2025-06-28_at_14.08.48-removebg-preview_ohd9mh.png" 
    alt="Prana Chitta Ashram" 
    className="w-full h-96 object-contain"
  />
</div>


        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-8 mt-10">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left">
    <h4 className="font-merienda text-3xl font-bold text-gray-900 mb-6">
      The Unity of Breath and Awareness
    </h4>
    <p className="text-xl text-gray-700 leading-relaxed font-medium">
      Together, prāṇa and chitta hold the key to presence: When prāṇa flows freely, chitta becomes clear.
      One moves, one reflects. In their meeting, we return to the quiet intelligence of life itself.
    </p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
  <img 
    src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751100336/WhatsApp_Image_2025-06-27_at_08.57.53_gm58yt.jpg" 
    alt="Prana Chitta Ashram" 
    className="w-64 h-auto object-contain rounded-xl"
  />
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
            <h2 className="font-merienda text-4xl font-bold text-gray-900">Meet Founder & Facilitator
</h2>
          </div>
          <div className="w-25 h-1 bg-primary-custom mb-8"></div>
        </div>

        {/* Description */}
<div className="space-y-6 text-gray-700 leading-relaxed">
  <p>
    Gitana brings years of dedicated practice and study in yoga, breathwork, meditation and somatic healing.
    Her approach is rooted in both ancient wisdom traditions and modern therapeutic understanding, creating
    a safe and nurturing space for transformation. Her sessions are grounded in nervous system regulation and
    emotional integration.
  </p>
  <p>
    Gitana is trained in a wide range of modalities including trauma-informed counseling, yoga, integrative
    bodywork and craniosacral therapy. She specialises in conscious connected breathwork, advanced pranayama
    and subtle energy work with a focus on the chakra system.
  </p>
  <p>
    She facilitates both active and passive meditations, with a deep passion for Osho Meditations, Sufism,
    Bhakti Yoga and mantra chanting.
  </p>
  <p>
    She also holds additional certification in Pre- and Postnatal Yoga, guided by Ayurvedic principles and
    a holistic understanding of the feminine journey.
  </p>
  <p>
    Gitana guides individuals and groups with compassion, authenticity and deep respect for each person's
    unique journey.
  </p>
</div>


        {/* Quote */}
        <div className="bg-primary-custom/5 rounded-2xl p-6 border-l-4 border-primary-custom">
          <p className="font-merienda text-xl text-primary-custom font-semibold italic">
            "My work is to create spaces where people can remember their own wholeness — where
            breath becomes a bridge back to the wisdom that lives within."
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
      <div className="flex justify-center mb-12 lg:mb-0">
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
          <Image
            src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750761235/Screenshot_2025-06-24_at_16.00.32_gw9vbg.png"
            alt="Gitana - Teacher and Founder"
            width={320}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

 <section className="py-20 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <MapPin className="h-8 w-8 text-primary-custom mr-3" />
        <h2 className="font-merienda text-4xl font-bold text-gray-900">The Ashram</h2>
      </div>

      <div className="w-16 h-1 bg-primary-custom mx-auto mb-8"></div>

      <div className="inline-flex items-center bg-primary-custom/10 rounded-full px-6 py-3">
        <span className="text-2xl mr-2">📍</span>
        <p className="text-xl text-primary-custom font-semibold">Opening Soon • Kandy, Sri Lanka</p>
      </div>
    </div>

    {/* First image - visible only on mobile */}
    <div className="lg:hidden mb-12">
      <Image
        src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750929387/Screenshot_2025-06-26_at_14.43.54_m7ni8b.png"
        alt="Ashram in Kandy, Sri Lanka"
        width={600}
        height={500}
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          The word ashram comes from the Sanskrit root <em className="text-primary-custom font-semibold">śram</em>,
          meaning both effort and rest. It is a place of dedicated practice and simple living.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          The ashram in Kandy is a quiet refuge nestled in nature, where life follows the rhythm of deepening
          breath, growing awareness and simple, conscious living.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Here, we live and practice together - we breathe, cook, move, sit in silence, tend to the garden and share
          with honesty and care.
        </p>

        <div className="bg-primary-custom/5 rounded-2xl p-8 border-l-4 border-primary-custom">
          <p className="font-merienda text-xl text-primary-custom font-semibold italic leading-relaxed">
            Whether you come for a week, a season, or longer, this is a space to come home. To breathe more deeply,
            unlearn what is no longer needed, and remember what has always been within you.
          </p>
        </div>

        <Button
          asChild
          className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <a href="/contact">Contact for Booking Enquiry</a>
        </Button>

        {/* Second image on mobile - shown below the contact button */}
        <div className="lg:hidden mt-8">
          <Image
            src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751101535/WhatsApp_Image_2025-06-27_at_08.55.17_vuccze.jpg"
            alt="Ashram Surroundings"
            width={600}
            height={500}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Desktop images side-by-side */}
  <div className="hidden lg:flex flex-col gap-6 items-center">
  {/* First 4:3 image */}
  <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
    <Image
      src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750929387/Screenshot_2025-06-26_at_14.43.54_m7ni8b.png"
      alt="Ashram in Kandy, Sri Lanka"
      fill
      className="object-cover"
    />
  </div>

  {/* Second 4:3 image */}
  <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
    <Image
      src="https://res.cloudinary.com/dbewukdt0/image/upload/v1751101535/WhatsApp_Image_2025-06-27_at_08.55.17_vuccze.jpg"
      alt="Ashram Surroundings"
      fill
      className="object-cover"
    />
  </div>
</div>




    </div>
  </div>
</section>


      {/* Reviews Section */}
<>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-merienda font-bold text-primary-custom">Reviews</h2>
      </div>

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
    </>



      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 bg-primary-custom text-white">
  <div className="container mx-auto max-w-4xl text-center">
    <Heart className="h-12 w-12 mx-auto mb-6 text-white/80" />
    <h2 className="font-merienda text-4xl font-bold mb-6">Begin Your Journey Within</h2>
    <div className="w-16 h-1 bg-white/50 mx-auto mb-8"></div>
    <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
      Join our community and receive gentle guidance, breathwork practices, and inspiration for your inner
      journey.
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
