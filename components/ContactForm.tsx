"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function ContactForm({ isOpen, onClose, title = "Contact Us" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your backend
    // For now, we'll just show an alert
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thank you for your enquiry! We will get back to you soon.")
        setFormData({ name: "", email: "", phone: "", message: "" })
        onClose()
      } else {
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-merienda text-green-700">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <Textarea
            name="message"
            placeholder="Tell us about your interest and any questions you have..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Send Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
