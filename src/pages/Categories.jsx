import { Link, useOutletContext } from 'react-router-dom'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { useCart } from '../context/cartStore'
import { useWishlist } from '../context/wishlistStore'
import CategoryCard from '../components/categories/CategoryCard'
import CategoryProductSection from '../components/categories/CategoryProductSection'

export default function Categories() {
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()
  const { openQuickView } = useOutletContext()
  return (
    <>
      <section className="shop-page section-shell">
        <div className="shop-heading"><div className="eyebrow"><span className="eyebrow-dot" /> A LITTLE BIT OF EVERYTHING</div><h1>Find your <em>kind of thing.</em></h1><p>Pick a corner and find something useful, lovely or a little bit of both.</p></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.name} category={category} index={index} />)}</div>
      </section>
      {categories.map((category) => (
        <CategoryProductSection
          key={category.name}
          category={category}
          products={products.filter((product) => product.category === category.name)}
          onAdd={addToCart}
          onToggleWishlist={toggleWishlist}
          wishlist={wishlist}
          onQuickView={openQuickView}
        />
      ))}
      <div className="section-shell categories-all-link"><Link className="button button-dark" to="/shop">Browse all products</Link></div>
    </>
  )
}
