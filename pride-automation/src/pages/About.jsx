import {
  ShieldCheck,
  Target,
  Compass,
  Cpu,
  Headphones,
  Users,
  Award,
  Building2,
  ExternalLink,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { COMPANY_DETAILS, WHY_CHOOSE_US } from '../data/products'

export default function About() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    Headphones: Headphones,
    Users: Users
  }

  return (
    <div className="space-y-10 sm:space-y-14 py-6 sm:py-8">
      {/* 1. Header / Hero Intro */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="max-w-3xl">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
              About Pride Automation
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
              Engineering high-efficiency automation hardware and custom control systems that empower Indian industries to run with uncompromising precision, speed, and safety.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Facility & Company Overview */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="max-w-4xl space-y-4">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                Established Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17212B] font-heading">
                15+ Years of Dedicated Industrial Automation Engineering
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pride Automation operates as a dedicated engineering solutions provider and turnkey control panel builder for modern industrial manufacturing facilities. Our company was founded on the core principle that production lines cannot afford downtime.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether a plant facility requires urgent inverter replacements, or an industrial manufacturer needs an automated component testing bench, we deliver genuine components with rigorous pre-dispatch testing and comprehensive technical support.
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#075522] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#17212B]">Industrial Engineering Specialists</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      We blend deep hardware and electrical domain knowledge with modern IoT telemetry and precision digital control workflows.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#17212B] font-heading mb-3">Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To empower manufacturing and process industries with authentic, high-reliability automation hardware, rapid engineering response, and tailor-made electrical control systems that boost factory productivity while minimizing operational lifecyle costs.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#075522] shrink-0" />
                  <span>100% factory-sealed original components</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#075522] shrink-0" />
                  <span>Rapid dispatch to prevent plant standstill</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#17212B] font-heading mb-3">Our Vision</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To be the most trusted single-window automation partner for industrial enterprises across western India and beyond, recognized for engineering integrity, rapid technical problem-solving, and pioneering smart IoT integration.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#075522] shrink-0" />
                  <span>Continuous adoption of next-gen smart industrial IoT</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#075522] shrink-0" />
                  <span>Long-term partnerships rooted in technical transparency</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Products and Solutions Overview */}
      <section className="bg-white py-10 sm:py-12 border-y border-gray-100">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                Capabilities Overview
              </span>
              <h2 className="text-3xl font-extrabold text-[#17212B] font-heading mt-1">
                Products & Solutions Spectrum
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                We bridge the gap between global industrial component manufacturers and local plant engineering teams.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-3">
              <span className="text-xs font-bold text-[#075522] bg-[#EAF3E9] px-2.5 py-1 rounded-md inline-block">
                01. Hardware Distribution
              </span>
              <h3 className="text-base font-bold text-[#17212B] font-heading">
                Factory Automation Components
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Authorized supply of Siemens SIMATIC PLCs, Delta drives, INVT vector inverters, Mean Well power units, and Omron sensor arrays with manufacturer warranty.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-3">
              <span className="text-xs font-bold text-[#075522] bg-[#EAF3E9] px-2.5 py-1 rounded-md inline-block">
                02. Custom Panel Fabrication
              </span>
              <h3 className="text-base font-bold text-[#17212B] font-heading">
                Turnkey PLC & VFD Control Panels
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom design, fabrication, wiring, and programming of IP55/IP65 electrical control enclosures tailored for harsh textile, diamond, and chemical plant environments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-3">
              <span className="text-xs font-bold text-[#075522] bg-[#EAF3E9] px-2.5 py-1 rounded-md inline-block">
                03. Smart Engineering & IoT
              </span>
              <h3 className="text-base font-bold text-[#17212B] font-heading">
                Telemetry & Test Automation
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Automated automotive durability test rigs, IoT precision irrigation stations, and remote weather monitoring stations with cloud telemetry dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
              Our Commitments
            </span>
            <h2 className="text-3xl font-extrabold text-[#17212B] font-heading mt-1">
              Why Customers Rely on Pride Automation
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#17212B] font-heading mb-1.5">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
