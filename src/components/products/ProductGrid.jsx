import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAdd, onToggleWishlist, wishlist, onQuickView, className = '', children }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <span>🧺</span>
        <h2>No products found</h2>
        <p>There’s no little something here just yet. Try another category or browse everything.</p>
        <Link className="button button-dark" to="/shop">See all the good stuff</Link>
      </div>
    )
  }

  return (
    <div className={`product-grid ${className}`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          onAdd={onAdd}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlist.some((item) => item.id === product.id)}
          onQuickView={onQuickView}
        />
      ))}
      {children}
    </div>
  )
}
