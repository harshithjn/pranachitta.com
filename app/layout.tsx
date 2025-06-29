import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Merienda, Quicksand } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"
import Script from "next/script"

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
  title: "Prana Chitta Ashram ",
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1P88X7Y7N3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1P88X7Y7N3');
          `}
        </Script>
      </head>
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
