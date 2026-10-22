import { Link, useOutletContext, useParams } from 'react-router-dom'
import { products } from '../data/products'
import EmptyState from '../components/common/EmptyState'
import ProductGallery from '../components/product-details/ProductGallery'
import ProductInfo from '../components/product-details/ProductInfo'
import RelatedProducts from '../components/product-details/RelatedProducts'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { openQuickView } = useOutletContext()
  const product = products.find((item) => String(item.id) === id)
  if (!product) return <EmptyState icon="🧭" title="Looks like a little detour." action="Back to the good stuff" />

  return (
    <section className="detail-page section-shell">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><span>{product.title}</span></div>
      <div className="detail-layout"><ProductGallery product={product} /><ProductInfo product={product} /></div>
      <RelatedProducts product={product} onQuickView={openQuickView} />
    </section>
  )
}
