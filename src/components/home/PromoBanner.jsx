import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <section className="story-section">
      <div className="story-inner section-shell">
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80" alt="A cheerful, thoughtfully arranged home shelf" onError={(event) => { event.currentTarget.src = 'https://placehold.co/800x700/f2e5d8/34302f?text=Everyday+joy' }} />
          <span className="story-stamp">GOOD<br />MOOD<br />GOODS <i>✳</i></span>
        </div>
        <div className="story-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A LITTLE MORE ABOUT US</div>
          <h2>Because little<br />things can make<br /><em>a big day.</em></h2>
          <p>We believe shopping should feel like finding a little treasure. Useful bits, feel-good treats and everyday favourites — picked to bring a little more joy to your day, for a little less.</p>
          <Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link>
          <div className="story-stats"><span><b>40<span>+</span></b><small>happy little finds</small></span><span><b>8</b><small>ways to browse</small></span><span><b>100<span>%</span></b><small>good mood energy</small></span></div>
        </div>
      </div>
    </section>
  )
}
