import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SectionHeading({ kicker, title, link, linkText }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow"><span className="eyebrow-dot" /> {kicker}</div>
        <h2>{title}</h2>
      </div>
      {link && <Link className="text-link heading-link" to={link}>{linkText} <ArrowRight size={16} /></Link>}
    </div>
  )
}
