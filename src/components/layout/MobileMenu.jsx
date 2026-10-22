import { Link } from 'react-router-dom'

export default function MobileMenu({ open, onNavigate }) {
  return (
    <nav className={`main-nav ${open ? 'is-open' : ''}`}>
      <Link to="/" onClick={onNavigate}>Home</Link>
      <Link to="/shop" onClick={onNavigate}>Shop</Link>
      <Link to="/categories" onClick={onNavigate}>Categories</Link>
      <a href="/#deals" onClick={onNavigate}>Deals <span className="nav-hot">HOT</span></a>
      <Link to="/about" onClick={onNavigate}>About</Link>
      <Link to="/contact" onClick={onNavigate}>Contact</Link>
    </nav>
  )
}
