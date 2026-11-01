import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ChevronRight,
  Copy,
  ExternalLink,
  Award
} from 'lucide-react'
import { COMPANY_DETAILS } from '../data/products'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [copiedItem, setCopiedItem] = useState(null)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(type)
    setTimeout(() => setCopiedItem(null), 2200)
  }


  const solutions = [
    { name: "Embedded Systems Development", path: "/services" },
    { name: "Electronic Solutions & PCB", path: "/services" },
    { name: "Electrical Solutions & Panels", path: "/services" },
    { name: "Web & Mobile App Solutions", path: "/services" },
    { name: "PLC & Modular I/O Systems", path: "/products" },
    { name: "Variable Frequency Drives (VFD)", path: "/products" }
  ]

  return (
    <footer className="bg-gradient-to-b from-[#063816] via-[#04250e] to-[#021508] text-white pt-12 pb-8 sm:pt-14 sm:pb-10 relative overflow-hidden">
      {/* Top Luminous Neon Gradient Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 via-[#548B54] to-transparent shadow-[0_0_12px_rgba(52,211,153,0.5)]" />

      {/* Subtle Technical Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient Gradient Glow Spheres */}
      <div className="absolute -top-24 right-1/4 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[420px] h-[420px] bg-[#548B54]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        
        {/* Main 12-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          
          {/* Column 1: Brand & Operational Status (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <Link to="/" className="inline-block group focus:outline-none">
                <div className="bg-white px-3.5 py-2 rounded-2xl shadow-md border border-white/40 transition-all duration-300 group-hover:scale-103 group-hover:shadow-emerald-500/20 inline-flex items-center">
                  <img
                    src={COMPANY_DETAILS.logo}
                    alt="Pride Automation Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>

              {/* Live Operational Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[11px] text-emerald-300 font-medium shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Engineering Support Desk • Mon – Sat 9AM - 7PM</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EAF3E9]/80 leading-relaxed max-w-sm">
              Premier industrial automation hardware distributor and custom control panel manufacturer. Delivering zero-downtime engineering solutions across India.
            </p>

            {/* Social / Direct Connect Icon Strip */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Us"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/20 text-[#EAF3E9] hover:text-[#25D366] flex items-center justify-center transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.callLink}
                title="Call Support"
                aria-label="Phone"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/20 text-[#EAF3E9] hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.emailSales}`}
                title="Email Us"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/20 text-[#EAF3E9] hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=XION+Mall+Hinjewadi+Pune"
                target="_blank"
                rel="noopener noreferrer"
                title="View on Google Maps"
                aria-label="Google Maps"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/20 text-[#EAF3E9] hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-sky-400 hover:bg-sky-500/20 text-[#EAF3E9] hover:text-sky-400 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>

            {/* Dual Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1eb857] text-white hover:brightness-110 transition-all duration-200 font-semibold text-xs shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_DETAILS.callLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all duration-200 font-medium text-xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-heading relative inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'Engineering Services', path: '/services' },
                { name: 'Products Catalog', path: '/products' },
                { name: 'About Pride Automation', path: '/about' },
                { name: 'Contact & Support', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-[#EAF3E9]/75 hover:text-white transition-all duration-200 py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quality Badge */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-semibold tracking-wide uppercase text-[#EAF3E9]/90">
                  ISO Standard Quality
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Industrial Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-heading relative inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Solutions & Hardware
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-[#EAF3E9]/75 hover:text-white transition-all duration-200 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-300 group-hover:scale-125 transition-all duration-200 shrink-0" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1 truncate">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-heading relative inline-flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Head Office & Plant
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Address with Google Maps link */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-1">
                    <p className="leading-relaxed text-[#EAF3E9]/85 text-[11px] sm:text-xs">
                      {COMPANY_DETAILS.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=XION+Mall+Hinjewadi+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-0.5"
                    >
                      <span>Get Directions on Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Phone with Copy button */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href={COMPANY_DETAILS.callLink}
                    className="hover:text-emerald-300 font-bold text-white transition-colors text-xs sm:text-sm"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_DETAILS.phone, 'phone')}
                  title="Copy Phone Number"
                  className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors text-[10px] flex items-center gap-1 cursor-pointer"
                >
                  {copiedItem === 'phone' ? (
                    <span className="text-emerald-300 text-[10px] font-semibold">Copied!</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct Email with Copy button */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emailSales}`}
                    className="hover:text-emerald-300 text-[#EAF3E9]/90 transition-colors truncate text-xs"
                  >
                    {COMPANY_DETAILS.emailSales}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_DETAILS.emailSales, 'email')}
                  title="Copy Email Address"
                  className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors text-[10px] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedItem === 'email' ? (
                    <span className="text-emerald-300 text-[10px] font-semibold">Copied!</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Operating Hours card */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#EAF3E9]/75">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hours: Mon – Sat, 9:00 AM – 7:00 PM IST</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4. Bottom Bar (Fancy Legal, Precision Statement & Smooth Back To Top) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF3E9]/60">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-center sm:text-left">
            <p>
              © {currentYear} <span className="text-white font-semibold">Pride Automation</span>. All rights reserved.
            </p>
            <span className="hidden sm:inline-block text-white/20">•</span>
            <p className="text-[#EAF3E9]/50">
              Zero-Downtime Industrial Control Systems
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-[#EAF3E9]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Pune Industrial Zone, Maharashtra</span>
          </div>
        </div>



      </div>
    </footer>
  )
}

