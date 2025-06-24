import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Merienda, Quicksand } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"

const merienda = Merienda({
  subsets: ["latin"],
  variable: "--font-merienda",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prāṇa Chitta Ashram - Meditation Center & Ashram for the Living Heart-Mind",
  description:
    "Breathing into loving awareness. Meditation, Yoga, Breathwork, Prana, Pranayama, Chitta, Kandy, Pre-Postnatal Yoga, Hatha Yoga, Sattva, Ashram",
  keywords:
    "Meditation, Yoga, Breathwork, Prana, Pranayama, Chitta, Kandy, Pre-Postnatal Yoga, Hatha Yoga, Sattva, Ashram",
  icons: {
    icon: "/icon.ico", // ✅ Correct: relative to public/
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${merienda.variable} ${quicksand.variable}`}>
      <body className="font-quicksand">
        <ClientLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
