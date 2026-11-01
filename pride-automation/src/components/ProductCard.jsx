import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ChevronUp, Cpu, CheckCircle } from 'lucide-react'

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 bg-gray-50 overflow-hidden flex items-center justify-center p-4 border-b border-gray-100/80">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAF3E9] text-[#075522] border border-[#548B54]/20 shadow-2xs">
            <Cpu className="w-3 h-3" />
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Product Details Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#548B54]">
            {product.categoryLabel}
          </span>
          <h3 className="text-base font-bold text-[#17212B] mt-1 group-hover:text-[#075522] transition-colors line-clamp-1 font-heading">
            {product.name}
          </h3>
          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Specifications Collapsible Drawer */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 hover:text-[#075522] transition-colors py-1"
          >
            <span>{expanded ? 'Hide Technical Specs' : 'View Technical Specs'}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden pt-2"
              >
                <div className="bg-[#F8FAF8] rounded-xl p-3 space-y-1.5 text-[11px] border border-gray-100">
                  {product.specs?.slice(0, 4).map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-2">
                      <span className="text-gray-500 font-medium">{spec.label}:</span>
                      <span className="text-[#17212B] font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                  {product.features && (
                    <div className="pt-2 border-t border-gray-200/60 mt-2 space-y-1">
                      {product.features.slice(0, 2).map((feat, fIdx) => (
                        <p key={fIdx} className="text-gray-600 flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#075522] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Row */}
          <div className="mt-4 flex items-center gap-2">
            <Link
              to="/contact"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#075522] hover:bg-[#03441B] text-white text-xs font-semibold rounded-xl shadow-2xs hover:shadow transition-all group/btn"
            >
              <span>Inquire Product</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
