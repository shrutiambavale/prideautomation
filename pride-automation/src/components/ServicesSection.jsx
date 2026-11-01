import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Zap,
  Smartphone,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  X,
  PhoneCall,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { SERVICES } from '../data/services'
import { COMPANY_DETAILS } from '../data/products'

export default function ServicesSection({ isStandalonePage = false }) {
  const [activeModalService, setActiveModalService] = useState(null)

  const iconMap = {
    Cpu: Cpu,
    Microchip: Layers,
    Zap: Zap,
    Smartphone: Smartphone
  }

  return (
    <section id="services" className={`relative ${isStandalonePage ? 'py-4' : 'py-12 sm:py-16'}`}>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF3E9] text-[#075522] text-xs font-semibold mb-3 border border-[#548B54]/20 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#075522] animate-pulse" />
              <span>Full-Stack Engineering & Digital Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17212B] tracking-tight font-heading">
              Our Core <span className="text-[#075522]">Services</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-2xl leading-relaxed">
              From low-level microcontrollers and custom multi-layer PCB design to heavy industrial electrical panels and cloud-connected web/mobile dashboards, we deliver end-to-end engineering excellence.
            </p>
          </ScrollReveal>

          {!isStandalonePage && (
            <ScrollReveal direction="up" delay={0.1}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAF3E9] hover:bg-[#d8ebd6] text-[#075522] text-xs font-bold transition-all shadow-2xs hover:shadow-xs group shrink-0"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          )}
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Cpu

            return (
              <ScrollReveal key={service.id} direction="up" delay={0.08 * (index + 1)}>
                <div className="group h-full bg-white rounded-3xl border border-gray-100/90 hover:border-[#548B54]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Image & Badge */}
                  <div className="relative aspect-16/9 overflow-hidden bg-gray-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Category Floating Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#075522] shadow-sm">
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{service.badge}</span>
                      </span>
                    </div>

                    {/* Quick Stat Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading drop-shadow-sm">
                          {service.title}
                        </h3>
                        <p className="text-xs text-white/85 font-medium line-clamp-1 drop-shadow-2xs">
                          {service.subtitle}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shrink-0 group-hover:bg-[#075522] group-hover:border-transparent transition-colors">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Key Capabilities List */}
                      <div className="mt-5 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                          Core Capabilities:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.highlights.slice(0, 4).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#075522] shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-700 leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 6).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#F8FAF8] border border-gray-100 text-[11px] font-medium text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 6 && (
                          <span className="px-2 py-1 rounded-lg bg-[#EAF3E9] text-[11px] font-semibold text-[#075522]">
                            +{service.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveModalService(service)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075522] hover:text-[#03441B] transition-colors cursor-pointer"
                      >
                        <span>View Technical Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        to={`/contact?subject=${encodeURIComponent(`Inquiry for ${service.title}`)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-semibold shadow-2xs hover:shadow transition-all duration-200"
                      >
                        <span>Inquire Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Integrated Consultation Banner */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#063816] to-[#03240e] p-7 sm:p-10 text-white relative overflow-hidden shadow-xl">
            {/* Background glowing decorations */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#548B54]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Turnkey Engineering Synergy</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  Need an Integrated Hardware + Electrical + Cloud Solution?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
                  We don't just supply discrete parts; we design the circuit boards, fabricate the high-voltage industrial panels, program the microcontrollers, and deploy the cloud IoT mobile applications for a seamless unified turnkey experience.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#075522] text-xs font-bold shadow-md hover:shadow-lg transition-all text-center"
                >
                  <span>Book Technical Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-colors text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Detail Modal for Selected Service */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative aspect-21/9 bg-gray-900 shrink-0">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#075522] text-white mb-1.5">
                    {activeModalService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                    {activeModalService.title}
                  </h3>
                  <p className="text-xs text-white/80">{activeModalService.subtitle}</p>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#548B54] mb-2">
                    Service Overview
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeModalService.description}
                  </p>
                </div>

                {/* Key Deliverables Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#548B54] mb-3">
                    Technical Specifications & Scope
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalService.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAF8] border border-gray-100">
                        <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="block text-xs font-semibold text-[#17212B] mt-1">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#548B54] mb-3">
                    Key Engineering Capabilities
                  </h4>
                  <div className="space-y-2">
                    {activeModalService.highlights.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs text-gray-700 leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical Applications */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#548B54] mb-3">
                    Typical Applications & Deployments
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalService.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 text-xs text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#075522]" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#548B54] mb-2.5">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalService.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#EAF3E9] text-[#075522] text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Discuss on WhatsApp</span>
                  </a>

                  <Link
                    to={`/contact?subject=${encodeURIComponent(`Engineering Consultation for ${activeModalService.title}`)}`}
                    onClick={() => setActiveModalService(null)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-bold shadow-xs hover:shadow transition-all"
                  >
                    <span>Request Engineering Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
