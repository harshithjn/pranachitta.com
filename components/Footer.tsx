import Link from "next/link"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white  flex items-center justify-center">
  <img src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750762022/Transparent-01_x7azvw.png" alt="Icon" className="h-15 w-15" />
</div>
              <div>
                <h3 className="font-merienda text-xl font-bold">Prana Chitta Ashram</h3>
                <p className="font-merienda text-sm text-primary-custom/80">Breathing into loving awareness</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Offering practices that support individuals in awakening their life energy and softening into the wholeness of the present moment- available worldwide and online.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-merienda text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-custom transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/online" className="text-gray-300 hover:text-primary-custom transition-colors">
                  Online Sessions
                </Link>
              </li>
              <li>
                <Link href="/offline" className="text-gray-300 hover:text-primary-custom transition-colors">
                  In-Person Events
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary-custom transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-merienda text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-custom" />
                <span className="text-gray-300">pranachitta@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-custom" />
                <span className="text-gray-300">+91 84948 02474</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Prana Chitta Ashram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
