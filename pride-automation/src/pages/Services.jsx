import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Cpu,
  Layers,
  Zap,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
  Sparkles,
  PhoneCall,
  Terminal,
  Activity
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ServicesSection from '../components/ServicesSection'
import { SERVICES } from '../data/services'
import { COMPANY_DETAILS } from '../data/products'

export default function Services() {
  const steps = [
    {
      num: '01',
      title: 'Architecture & Feasibility',
      desc: 'We analyze your operational needs, define hardware/software requirements, perform component selection, and design the system blueprint.'
    },
    {
      num: '02',
      title: 'Schematics & Firmware / Software',
      desc: 'Our engineers design multi-layer PCB layouts, develop firmware on FreeRTOS/Linux, draft electrical schematics, and code modern web/mobile apps.'
    },
    {
      num: '03',
      title: 'Fabrication & Lab Verification',
      desc: 'Rapid prototype assembly, HIL testing, electrical panel wiring, and signal integrity testing under simulated harsh industrial conditions.'
    },
    {
      num: '04',
      title: 'Plant Commissioning & Cloud Launch',
      desc: 'On-site installation, machinery calibration, cloud IoT streaming activation, and continuous operational maintenance support.'
    }
  ]

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* 1. HERO HEADER */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3E9] text-[#075522] text-xs font-semibold border border-[#548B54]/25 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#075522] animate-pulse" />
                <span>Specialized Industrial Engineering Services</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17212B] tracking-tight leading-[1.15] font-heading">
                Engineering Solutions: <span className="text-[#075522]">Silicon to Cloud</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Pride Automation provides end-to-end design, development, and integration across <strong>Embedded Systems</strong>, <strong>Electronic Solutions</strong>, <strong>Electrical Solutions</strong>, and <strong>Web & Mobile Apps</strong>. We help manufacturing and industrial enterprises turn complex requirements into robust, high-performance reality.
              </p>
            </ScrollReveal>

            {/* Quick Service Anchor Navigation */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {SERVICES.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 hover:border-[#075522] hover:text-[#075522] text-xs font-semibold text-gray-700 shadow-2xs transition-colors"
                  >
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION */}
      <ServicesSection isStandalonePage={true} />

      {/* 3. ENGINEERING WORKFLOW (01 -> 04) */}
      <section className="bg-white py-12 sm:py-16 border-y border-gray-100">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                Proven Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
                How We Deliver Engineering Excellence
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                A disciplined engineering approach designed for zero defects, strict adherence to timelines, and seamless integration.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.08 * idx}>
                <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-100 hover:border-[#548B54]/40 hover:bg-white shadow-2xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-black text-[#548B54]/40 font-heading block mb-2">
                      {st.num}
                    </span>
                    <h3 className="text-base font-bold text-[#17212B] font-heading mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SERVICES */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EAF3E9]/60 rounded-3xl p-8 sm:p-12 border border-[#548B54]/20">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#075522]">
              Single-Source Reliability
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17212B] font-heading tracking-tight">
              One Engineering Partner for Both Hardware and Cloud
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Industrial clients often struggle with fragmented vendors: one contractor for electrical wiring, another for PCB fabrication, a firmware freelancer, and an external software agency.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Pride Automation, we eliminate communication friction. Our multidisciplinary team builds the hardware, writes the firmware, assembles the panel, and streams the telemetry into your custom web and mobile app.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Request Project Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold border border-gray-200 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#075522]" />
                <span>Call Technical Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { label: 'Firmware & Edge', value: '100% C/C++ & RTOS' },
              { label: 'PCB Standards', value: 'IPC Class 2 / 3' },
              { label: 'Panel Protection', value: 'IP55 / IP65 Rated' },
              { label: 'Cloud Uptime', value: '99.9% IoT SLA' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-xs border border-white/60 text-center">
                <p className="text-lg sm:text-xl font-black text-[#075522] font-heading">{stat.value}</p>
                <p className="text-xs font-medium text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
