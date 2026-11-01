import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Headphones,
  Users,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ServicesSection from '../components/ServicesSection'
import {
  COMPANY_DETAILS,
  CATEGORIES,
  PRODUCTS,
  WHY_CHOOSE_US,
  INDUSTRIES_SERVED
} from '../data/products'

export default function Home() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    Headphones: Headphones,
    Users: Users
  }

  return (
    <div className="space-y-12 sm:space-y-16 pb-8">
      {/* 1. HERO SECTION */}
      <section className="relative pt-2 sm:pt-5 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3E9] text-[#075522] text-xs font-semibold border border-[#548B54]/25 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#075522] animate-pulse" />
                  <span>Industrial Automation & Engineering Distribution</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17212B] tracking-tight leading-[1.15]">
                  Reliable Industrial <span className="text-[#075522]">Automation</span> Solutions
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.25}>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
                  Pride Automation supplies certified industrial electronics, PLCs, variable speed drives, touch HMIs, and turnkey automated test rigs engineered to maximize uptime and operational precision in manufacturing plants.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.35}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold border border-gray-200 shadow-2xs transition-colors"
                  >
                    <span>Browse Products</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Quick Stat Pill Highlights */}
              <ScrollReveal direction="up" delay={0.45}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                  {COMPANY_DETAILS.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-2xl font-extrabold text-[#075522] font-heading">{stat.value}</p>
                      <p className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Industrial Visual */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" delay={0.25}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
                  <img
                    src={COMPANY_DETAILS.heroImage}
                    alt="Industrial Robotic Automation Assembly"
                    className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Glassmorphic Badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#075522] text-white flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#17212B] font-heading">
                          Precision Industrial Engineering
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          Pride Automation • Industrial Automation Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Embedded Systems, Electronic Solution, Electrical Solution, Web & Mobile App) */}
      <ServicesSection />

      {/* 3. PRODUCTS SECTION (Clean Grid of Category Cards) */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
              Portfolio Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
              Industrial Product Categories
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">
              Explore our core hardware divisions featuring genuine controllers, power supplies, high-torque inverters, and customized test benches.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAF3E9] hover:bg-[#d8ebd6] text-[#075522] text-xs font-bold transition-colors group shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.id} direction="up" delay={0.08 * idx}>
              <Link
                to={`/products?category=${cat.id}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Frame with zoom */}
                <div className="aspect-16/10 bg-gray-50 overflow-hidden relative flex items-center justify-center p-3 border-b border-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-106"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 shadow-2xs text-[#075522] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#17212B] group-hover:text-[#075522] transition-colors font-heading flex items-center justify-between">
                    <span>{cat.name}</span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="font-semibold text-[#075522]">Explore Hardware</span>
                    <span className="bg-[#EAF3E9] text-[#075522] px-2 py-0.5 rounded-md font-medium">
                      {cat.brands[0]} +
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-white py-10 sm:py-12 border-y border-gray-100">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                Pride Automation Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
                Why Industry Leaders Choose Us
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                We combine authentic equipment sourcing with practical on-ground engineering support to ensure zero factory downtime.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || CheckCircle2
              return (
                <ScrollReveal key={item.id} direction="up" delay={0.08 * idx}>
                  <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-100 hover:border-[#548B54]/40 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#EAF3E9] text-[#075522] flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-[#17212B] font-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. ABOUT US PREVIEW */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
                About Our Organization
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
                Delivering Dependable Industrial Control Infrastructure
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Pride Automation delivers high-reliability automation hardware, smart telemetry, and custom control solutions for manufacturing enterprises.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                From single replacement contactors and VFD inverters to complete multi-panel automated assembly stations, our team focuses on rapid delivery, authentic component provenance, and end-to-end reliability.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-bold shadow-2xs hover:shadow transition-all group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAF3E9] text-[#075522] hover:bg-[#d8ebd6] text-xs font-bold transition-colors"
                >
                  <span>Connect with Technical Team</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
              Applied Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
              Industries We Power
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Our hardware and panels run around the clock in challenging manufacturing settings.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.06 * idx}>
              <div className="p-4 rounded-xl bg-white border border-gray-100 hover:border-[#548B54]/40 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#075522] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#17212B] font-heading">{ind.name}</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{ind.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

