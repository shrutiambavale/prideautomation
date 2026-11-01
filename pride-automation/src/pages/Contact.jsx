import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { COMPANY_DETAILS } from '../data/products'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialSubject = searchParams.get('subject') || ''
  const initialService = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceOfInterest: initialService || (initialSubject.includes('Embedded') ? 'Embedded Systems' : initialSubject.includes('Electronic') ? 'Electronic Solution' : initialSubject.includes('Electrical') ? 'Electrical Solution' : initialSubject.includes('Web') ? 'Web & Mobile App' : 'General Engineering Inquiry'),
    message: initialSubject ? `Inquiry regarding: ${initialSubject}\n\n` : ''
  })

  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Full name is required'
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format'
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required'
    } else if (!/^[0-9+\s\-()]{8,18}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or technical inquiry'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(`Pride Automation Inquiry [${formData.serviceOfInterest}] from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service / Area of Interest: ${formData.serviceOfInterest}\n\n` +
      `Inquiry:\n${formData.message}\n`
    )

    const mailtoLink = `mailto:${COMPANY_DETAILS.emailSales}?subject=${subject}&body=${body}`
    const waText = encodeURIComponent(
      `*New Inquiry - Pride Automation*\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service / Topic:* ${formData.serviceOfInterest}\n` +
      `*Message:* ${formData.message}`
    )
    const whatsappLink = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${waText}`

    setSubmittedData({
      ...formData,
      mailtoLink,
      whatsappLink,
      rawText: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService / Topic: ${formData.serviceOfInterest}\nMessage: ${formData.message}`
    })
  }

  const copyToClipboard = () => {
    if (submittedData?.rawText) {
      navigator.clipboard.writeText(submittedData.rawText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', serviceOfInterest: 'General Engineering Inquiry', message: '' })
    setSubmittedData(null)
    setErrors({})
  }

  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-8 space-y-8">
      {/* Page Title */}
      <div className="max-w-3xl">
        <ScrollReveal direction="up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
            Direct Technical Support
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
            Contact Pride Automation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Reach out to our application engineering team for equipment inquiries, custom panel requests, or replacement parts.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg font-bold text-[#17212B] font-heading">
                  Corporate Office
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Pride Automation • Industrial Automation Solutions</p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#17212B] mb-0.5">Address</p>
                    <p className="text-gray-600 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#17212B] mb-0.5">Telephone</p>
                    <a
                      href={COMPANY_DETAILS.callLink}
                      className="text-[#075522] font-semibold hover:underline block"
                    >
                      {COMPANY_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#17212B] mb-0.5">Email Support</p>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emailSales}`}
                      className="text-[#075522] font-medium hover:underline block break-all"
                    >
                      {COMPANY_DETAILS.emailSales}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#17212B] mb-0.5">Working Hours</p>
                    <p className="text-gray-600">Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Inquiry Form Column */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs">
              <div className="border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-[#17212B] font-heading">
                  Send Technical Inquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Complete the form below. Once validated, your message will be prepared for direct dispatch to our technical desk.
                </p>
              </div>

              {submittedData ? (
                /* Delivery Mechanism Confirmation UI */
                <div className="space-y-6 py-4">
                  <div className="p-5 rounded-2xl bg-[#EAF3E9] border border-[#548B54]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#075522] text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#075522] font-heading">
                          Inquiry Validated & Ready for Transmission!
                        </h4>
                        <p className="text-xs text-gray-700 mt-0.5">
                          Thank you, <strong>{submittedData.name}</strong>. Because form submissions require direct delivery, please trigger your message through one of the working options below:
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Summary of what will be transmitted */}
                  <div className="bg-[#F8FAF8] rounded-2xl p-4 border border-gray-200 text-xs space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">Validated Message Content</span>
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#075522] hover:underline"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copied ? 'Copied to Clipboard!' : 'Copy Summary'}
                      </button>
                    </div>
                    <pre className="text-gray-700 font-mono text-[11px] whitespace-pre-wrap leading-relaxed">
                      {submittedData.rawText}
                    </pre>
                  </div>

                  {/* Direct Delivery Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <a
                      href={submittedData.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-2xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit via WhatsApp</span>
                    </a>

                    <a
                      href={submittedData.mailtoLink}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-bold transition-all shadow-2xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Transmit via Email Client</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs text-gray-500 hover:text-gray-800 underline font-medium"
                    >
                      Submit Another Inquiry
                    </button>
                    <span className="text-[11px] text-gray-400">Direct response within 2–4 business hours</span>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#075522] focus:ring-1 focus:ring-[#075522]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#075522] focus:ring-1 focus:ring-[#075522]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Number"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#075522] focus:ring-1 focus:ring-[#075522]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Service / Area of Interest *
                    </label>
                    <select
                      value={formData.serviceOfInterest}
                      onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#075522] focus:ring-1 focus:ring-[#075522] bg-white transition-colors"
                    >
                      <option value="Embedded Systems">Embedded Systems (Firmware & Microcontrollers)</option>
                      <option value="Electronic Solution">Electronic Solution (Custom PCB Design & Prototyping)</option>
                      <option value="Electrical Solution">Electrical Solution (Control Panels & Power Distribution)</option>
                      <option value="Web & Mobile App">Web & Mobile App (Industrial IoT & Telemetry Dashboards)</option>
                      <option value="PLC & Automation Hardware">PLC & Industrial Automation Hardware</option>
                      <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Inquiry / Required Technical Specifications *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention specific requirements, quantities, machine application, or technical specifications..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#075522] focus:ring-1 focus:ring-[#075522]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                      <span>Validate & Submit Inquiry</span>
                    </button>
                    <p className="text-[11px] text-gray-400 text-center mt-2">
                      Inquiry will be formatted for instant dispatch to Pride Automation technical engineers.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
