'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-0.5 bg-primary-custom mr-3"></div>
              <Leaf className="h-6 w-6 text-primary-custom" />
              <div className="w-8 h-0.5 bg-primary-custom ml-3"></div>
            </div>
            <h1 className="font-merienda text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get In
              <span className="text-primary-custom block mt-2">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to begin your healing journey? We're here to support you every step of the way. 
              Reach out with any questions or to schedule your first session.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-merienda text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="+94 XXX XXX XXX" className="rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" className="rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-custom focus:border-primary-custom outline-none resize-none h-32"
                    placeholder="Tell us about your healing goals or any questions you have..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary-custom hover:bg-primary-dark text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-merienda text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're here to answer your questions and support your healing journey. 
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-custom/10 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary-custom" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+94 XXX XXX XXX</p>
                      <p className="text-sm text-gray-500">Available daily 8AM-8PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-custom/10 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary-custom" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@pranachitta.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-custom/10 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary-custom" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ashram Location</h3>
                      <p className="text-gray-600">Kandy, Sri Lanka</p>
                      <p className="text-gray-600">Opening Soon</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-custom/10 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary-custom" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Session Hours</h3>
                      <p className="text-gray-600">Mon-Sat: 7AM-9PM</p>
                      <p className="text-gray-600">Sunday: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-merienda text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-primary-custom mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Quick answers to common questions about our offerings</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What should I expect in my first session?",
                answer: "Your first session will begin with a consultation to understand your goals and any health considerations. We'll then guide you through gentle breathing techniques and basic practices to help you feel comfortable and supported."
              },
              {
                question: "Do I need any special equipment for online sessions?",
                answer: "All you need is a stable internet connection, a quiet space, and comfortable clothing. A yoga mat is helpful but not required. We recommend using headphones for the best audio experience."
              },
              {
                question: "Are there any health conditions that prevent participation?",
                answer: "While breathwork is generally safe, certain conditions require medical clearance. Please consult with your healthcare provider if you have heart conditions, high blood pressure, or are pregnant."
              },
              {
                question: "Can I switch between online and offline sessions?",
                answer: "Absolutely! Many of our clients enjoy both formats. Online sessions offer convenience and flexibility, while offline sessions provide hands-on guidance and community connection."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary-custom">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-merienda text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards transformation. Book your initial consultation and discover how breathwork can change your life.
          </p>
          <Button size="lg" className="bg-white text-primary-custom hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}