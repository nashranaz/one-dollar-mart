import { Camera, Music2, Phone, Truck, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-brand-col">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">💸</span>
            <span className="brand-copy"><b>ONE DOLLAR</b><small>MART<span>.</span></small></span>
          </Link>
          <p>Crazy Deals. Tiny Prices.<br />Big Smiles!</p>
          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram"><Camera size={16} /></a>
            <a href="https://facebook.com" aria-label="Facebook"><UsersRound size={16} /></a>
            <a href="https://tiktok.com" aria-label="TikTok" className="tiktok-icon"><Music2 size={16} /></a>
            <a href="https://wa.me/923170829257" aria-label="WhatsApp"><Phone size={15} /></a>
          </div>
        </div>
        <div className="footer-links">
          <div><b>THE GOOD STUFF</b><Link to="/shop">Shop all finds</Link><Link to="/categories">Categories</Link><a href="/#deals">Little deals</a><Link to="/wishlist">Your love list</Link></div>
          <div><b>THE LITTLE DETAILS</b><Link to="/about">Our story</Link><Link to="/contact">Say hello</Link><a href="mailto:naznashra086@gmail.com">Get in touch</a><a href="/#top">FAQs</a></div>
          <div className="footer-news"><b>A HAPPY LITTLE PROMISE</b><p>Happy little finds, carefully packed and sent with a smile — wherever you are in Pakistan.</p><span><Truck size={16} /> Shipping across Pakistan</span></div>
        </div>
      </div>
      <div className="footer-bottom section-shell"><span>© 2026 ONE DOLLAR MART. Made for the little joys.</span><span>Rs. PKR <i>✳</i> With a little love, always.</span></div>
    </footer>
  )
}
