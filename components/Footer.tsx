'use client';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-white">
                <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750674074/6876_Prana_Chitta_Ashram-01_ka1bzz.jpg" alt="Icon" className="h-5 w-25" />
              </div>
              <span className="text-xl font-bold">Prana Chitta Ashram</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Breathing into loving awareness. A meditation center and ashram for the living heart-mind, 
              supporting your journey towards wholeness and presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/offline" className="text-gray-300 hover:text-green-400 transition-colors">In-Person Sessions</Link></li>
              <li><Link href="/online" className="text-gray-300 hover:text-green-400 transition-colors">Online Sessions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Offerings */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Offerings</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Breathwork & Pranayama</span></li>
              <li><span className="text-gray-300">Meditation & Awareness</span></li>
              <li><span className="text-gray-300">Movement & Embodiment</span></li>
              <li><span className="text-gray-300">Cranio-Sacral Therapy</span></li>
              <li><span className="text-gray-300">Inner Inquiry & Counselling</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+31 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">hello@pranachitta.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <div className="text-gray-300">
                  <p>Sacred Valley</p>
                  <p>Peaceful Mountains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Prana Chitta Ashram. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}