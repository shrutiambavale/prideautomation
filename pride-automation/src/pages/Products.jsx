import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, Filter, Cpu, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)

  // Keep state synced if URL parameter changes
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId)
    if (catId === 'all') {
      searchParams.delete('category')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ category: catId })
    }
  }

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory

      const q = searchQuery.toLowerCase().trim()
      if (!q) return matchesCat

      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.shortDesc?.toLowerCase().includes(q) ||
        item.categoryLabel?.toLowerCase().includes(q) ||
        item.specs?.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q))

      return matchesCat && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="max-w-3xl">
        <ScrollReveal direction="up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#548B54]">
            Industrial Hardware Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17212B] tracking-tight mt-1 font-heading">
            Products & Engineered Systems
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Browse our catalog of genuine programmable controllers, variable speed AC drives, operator HMIs, industrial sensors, and turnkey automated testing rigs.
          </p>
        </ScrollReveal>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, model (e.g. S7-1500, VFD, Sensor)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#075522] focus:ring-1 focus:ring-[#075522] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-gray-500 font-medium px-1 flex items-center gap-1.5 self-center">
            <span>Showing <strong className="text-[#075522]">{filteredProducts.length}</strong> industrial items</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#075522] text-white shadow-2xs'
                : 'bg-[#F8FAF8] text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#075522] text-white shadow-2xs'
                    : 'bg-[#F8FAF8] text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.shortName} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#EAF3E9] text-[#075522] flex items-center justify-center mx-auto mb-3">
            <SlidersHorizontal className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-800 font-heading">No matching products found</h3>
          <p className="text-xs text-gray-500 mt-1 mb-4">
            Try adjusting your search query or selecting a different equipment category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              handleCategoryChange('all')
            }}
            className="px-4 py-2 bg-[#075522] text-white text-xs font-semibold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Technical Consultation Banner */}
      <div className="bg-[#EAF3E9]/70 rounded-2xl p-6 sm:p-8 border border-[#548B54]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#17212B] font-heading">
            Need a Specific Industrial Part or Replacement Model?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            We source hard-to-find Siemens, Delta, INVT, Omron, and Mean Well hardware directly through our national distributor network.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-5 py-2.5 bg-[#075522] hover:bg-[#03441B] text-white text-xs font-semibold rounded-xl shrink-0 transition-colors shadow-2xs"
        >
          Consult Application Engineers
        </Link>
      </div>
    </div>
  )
}
