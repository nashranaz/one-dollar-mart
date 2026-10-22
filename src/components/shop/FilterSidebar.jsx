import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Grid2X2, List, SlidersHorizontal } from 'lucide-react'
import { money } from '../../utils/format'
import CategoryFilter from './CategoryFilter'
import SortDropdown from './SortDropdown'

export default function FilterSidebar({ count, query, category, sort, maxPrice, view, onViewChange, onCategoryChange, onSortChange, onPriceChange }) {
  const [filterOpen, setFilterOpen] = useState(false)
  return (
    <>
      <div className="shop-toolbar">
        <div className="shop-count">{count} little {count === 1 ? 'find' : 'finds'}{query && <span> for “{query}”</span>}</div>
        <div className="shop-tools">
          <button className={`filter-toggle ${filterOpen ? 'active' : ''}`} onClick={() => setFilterOpen(!filterOpen)}><SlidersHorizontal size={15} /> Filters <ChevronDown size={14} /></button>
          <SortDropdown sort={sort} onChange={onSortChange} />
          <div className="view-toggle" aria-label="Product layout">
            <button className={view === 'grid' ? 'selected' : ''} aria-label="Grid view" onClick={() => onViewChange('grid')}><Grid2X2 size={15} /></button>
            <button className={view === 'list' ? 'selected' : ''} aria-label="List view" onClick={() => onViewChange('list')}><List size={16} /></button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {filterOpen && (
          <motion.div className="filter-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <CategoryFilter category={category} onChange={onCategoryChange} />
            <label className="price-filter"><b>Up to <span>{money(maxPrice)}</span></b><input type="range" min="79" max="500" step="10" value={maxPrice} onChange={(event) => onPriceChange(Number(event.target.value))} /></label>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
