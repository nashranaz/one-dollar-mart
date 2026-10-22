import { Star } from 'lucide-react'

export default function ProductRating({ rating, reviews }) {
  return (
    <div className="product-rating">
      <Star size={13} fill="currentColor" />
      <b>{rating}</b>
      <span>({reviews})</span>
    </div>
  )
}
