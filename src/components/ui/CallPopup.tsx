"use client"

import React, { useState } from 'react'
import { Phone, X, Mail, User } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ElevenLabsWidget } from './ElevenLabsWidget'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './sheet'

interface CallPopupProps {
  className?: string
}

export function CallPopup({ className }: CallPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    contact: '',
    name: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [submittedData, setSubmittedData] = useState<{name: string, contact: string} | null>(null)

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '')
    // Check if it's a valid phone number (10-15 digits)
    return cleanPhone.length >= 10 && cleanPhone.length <= 15
  }

  const validateContact = (contact: string): boolean => {
    // Check if it's an email or phone number
    return validateEmail(contact) || validatePhone(contact)
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Contact validation (email or phone)
    if (!formData.contact) {
      newErrors.contact = 'Email or phone number is required'
    } else if (!validateContact(formData.contact)) {
      newErrors.contact = 'Please enter a valid email address or phone number'
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Captcha validation
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the reCAPTCHA'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send data to API
      const response = await fetch('/api/start-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaValue
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Store submitted data and show success popup
      setSubmittedData({ name: formData.name, contact: formData.contact })
      setShowSuccessPopup(true)
      
      // Reset form
      setFormData({ contact: '', name: '' })
      setCaptchaValue(null)
      setIsOpen(false)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className={cn(
            "fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 hover:scale-105",
            className
          )}>
                      {/* Small popup card */}
          <div className="bg-white border-2 border-white rounded-full shadow-lg p-2 flex items-center gap-2 min-w-[100px]">
            {/* Circular icon with metallic design */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-gray-800 flex items-center justify-center shadow-inner">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-300 to-gray-700 flex items-center justify-center">
                <Phone className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Black button with text */}
            <div className="bg-black text-white rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <Phone className="w-3 h-3 rotate-12" />
              <span className="text-xs font-medium">Start a call</span>
            </div>
          </div>
          
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center text-gray-900">
              Start a Call
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={cn(
                    "pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500",
                    errors.name && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Contact Field */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-sm font-medium text-gray-900">
                Email or Phone Number *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="contact"
                  type="text"
                  placeholder="Enter your email or phone number"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  className={cn(
                    "pl-10 bg-white border-gray-300 text-gray-900 placeholder-gray-500",
                    errors.contact && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </div>
              {errors.contact && (
                <p className="text-sm text-red-500">{errors.contact}</p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-900">
                Verification *
              </Label>
              <div className="flex justify-center">
                              <ReCAPTCHA
                sitekey="6LcGco8rAAAAAP5aOarV5uFnzns9JdtnTMLmXmUn"
                onChange={(value) => {
                  setCaptchaValue(value)
                  if (errors.captcha) {
                    setErrors(prev => ({ ...prev, captcha: '' }))
                  }
                }}
              />
              </div>
              {errors.captcha && (
                <p className="text-sm text-red-500 text-center">{errors.captcha}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Submit
                </div>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Slide Panel with ElevenLabs Convai */}
      <Sheet open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px] bg-white">
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold text-gray-900">
              Thank You!
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-6 mt-6">
            {/* User Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Your Details:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">Name: <strong>{submittedData?.name}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {submittedData?.contact.includes('@') ? (
                    <Mail className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Phone className="w-4 h-4 text-gray-500" />
                  )}
                  <span className="text-gray-700">
                    {submittedData?.contact.includes('@') ? 'Email' : 'Phone'}: <strong>{submittedData?.contact}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* ElevenLabs Convai Widget */}
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-3">Start Your Conversation:</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <ElevenLabsWidget agentId="agent_01k0ppyxn5eecaswntz2r3symf" />
              </div>
            </div>

            {/* Close Button */}
            <Button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-black hover:bg-gray-800 text-white"
            >
              Close
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
} 