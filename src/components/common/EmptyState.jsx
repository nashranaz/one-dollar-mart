import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EmptyState({ icon, title, children, action, to = '/shop' }) {
  return (
    <div className="empty-state">
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{children}</p>
      <Link className="button button-dark" to={to}>{action} <ArrowRight size={16} /></Link>
    </div>
  )
}
