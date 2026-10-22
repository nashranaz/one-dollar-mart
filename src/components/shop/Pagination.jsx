import { ArrowDown } from 'lucide-react'

export default function Pagination({ canLoadMore, onLoadMore }) {
  if (!canLoadMore) return null
  return <button className="load-more" onClick={onLoadMore}>Show me more little finds <ArrowDown size={16} /></button>
}
