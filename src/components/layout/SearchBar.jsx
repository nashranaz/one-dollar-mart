import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../../data/products'
import { money } from '../../utils/format'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const matches = query.trim()
    ? products.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : products.slice(0, 3)

  const search = (event) => {
    event.preventDefault()
    navigate(`/shop?q=${encodeURIComponent(query)}`)
    onClose()
  }

  return (
    <motion.div className="search-popover" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
      <form className="search-form" onSubmit={search}>
        <Search size={18} />
        <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your next little favourite..." />
        <button type="button" onClick={onClose} aria-label="Close search"><X size={18} /></button>
      </form>
      <div className="search-suggestions">
        <p>{query ? 'MATCHING FINDS' : 'POPULAR RIGHT NOW'}</p>
        {matches.length ? matches.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} onClick={onClose}>
            <img src={item.image} alt="" />
            <span>{item.title}<small>{money(item.price)}</small></span>
            <ArrowUpRight size={15} />
          </Link>
        )) : <span className="search-empty">No products found. Try a different search.</span>}
      </div>
      <button className="search-all" onClick={search}>See all results <ArrowRight size={15} /></button>
    </motion.div>
  )
}
