import { useMemo, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/cartStore'
import { useWishlist } from '../context/wishlistStore'
import ProductGrid from '../components/products/ProductGrid'
import FilterSidebar from '../components/shop/FilterSidebar'
import Pagination from '../components/shop/Pagination'
import ShopHeader from '../components/shop/ShopHeader'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(500)
  const [shown, setShown] = useState(12)
  const [view, setView] = useState('grid')
  const query = params.get('q') || ''
  const category = params.get('category') || ''
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()
  const { openQuickView } = useOutletContext()

  const filtered = useMemo(() => {
    let result = products.filter((product) => (
      product.price <= maxPrice
      && (!category || product.category === category)
      && (!query || `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(query.toLowerCase()))
    ))
    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    if (sort === 'popular') result = [...result].sort((a, b) => b.reviews - a.reviews)
    if (sort === 'newest') result = [...result].reverse()
    return result
  }, [query, category, maxPrice, sort])

  const changeCategory = (nextCategory) => {
    setParams({ ...(query ? { q: query } : {}), ...(nextCategory ? { category: nextCategory } : {}) })
    setShown(12)
  }

  return (
    <section className="shop-page section-shell">
      <ShopHeader category={category} query={query} />
      <FilterSidebar
        count={filtered.length}
        query={query}
        category={category}
        sort={sort}
        maxPrice={maxPrice}
        view={view}
        onViewChange={setView}
        onCategoryChange={changeCategory}
        onSortChange={setSort}
        onPriceChange={setMaxPrice}
      />
      <ProductGrid
        products={filtered.slice(0, shown)}
        onAdd={addToCart}
        onToggleWishlist={toggleWishlist}
        wishlist={wishlist}
        onQuickView={openQuickView}
        className={`shop-product-grid ${view === 'list' ? 'is-list' : ''}`}
      />
      <Pagination canLoadMore={filtered.length > shown} onLoadMore={() => setShown((count) => count + 12)} />
    </section>
  )
}
