import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR HAPPY PLACE FOR LITTLE PRICES</div>
          <h1>Everything<br />you love.<br /><span>Almost $1.</span></h1>
          <p>Discover crazy-good products at pocket-friendly Pakistani prices.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/shop">Shop the good stuff <ArrowRight size={17} /></Link>
            <a className="text-link" href="#categories">Explore categories <ArrowDown size={15} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>H</span><span>A</span><span>S</span><span>+</span></div>
            <span><b>Little finds, lots of love</b><small>Made for happy everyday moments</small></span>
          </div>
          <span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✦</span>
        </div>
        <div className="hero-art">
          <div className="hero-photo-wrap">
            <img className="hero-photo" src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=85" alt="Colourful little finds and gift shopping" onError={(event) => { event.currentTarget.src = 'https://placehold.co/800x900/efd8cd/34302f?text=Little+finds' }} />
            <div className="hero-photo-tint" />
          </div>
          <div className="hero-sticker sticker-note"><span>good things</span><b>inside!</b><i>✳</i></div>
          <div className="hero-sticker sticker-price"><small>little treat</small><b>from <strong>Rs. 79</strong></b><span>✦</span></div>
          <div className="hero-photo-label">THE LITTLE JOYS EDIT <ArrowUpRight size={14} /></div>
          <div className="hero-orbit">✳</div>
        </div>
        <div className="hero-bottom-note"><span>01 — 03</span><i /> A little delight around every corner</div>
      </section>
      <div className="ticker-strip">
        <div className="ticker-content">{Array.from({ length: 4 }, (_, index) => <span key={index}>GOOD THINGS FOR LESS <b>✳</b> SMALL PRICES, BIG JOY <b>✳</b> LITTLE FINDS, BIG FEELING <b>✳</b></span>)}</div>
      </div>
    </>
  )
}
