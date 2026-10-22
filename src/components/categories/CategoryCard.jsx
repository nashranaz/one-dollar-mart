import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category, index = 0 }) {
  return (
    <Link to={`/shop?category=${encodeURIComponent(category.name)}`} className={`category-card tone-${category.tone}`}>
      <img className="category-image" src={category.image} alt="" aria-hidden="true" />
      <span className="category-overlay" aria-hidden="true" />
      <span className="category-index">0{index + 1}</span>
      <span className="category-info"><b>{category.name}</b><small>{category.note}</small></span>
      <ArrowUpRight className="category-arrow" size={17} />
    </Link>
  )
}
