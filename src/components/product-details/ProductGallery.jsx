export default function ProductGallery({ product }) {
  const fallback = '/products/product-fallback.svg'
  return (
    <div className="detail-image">
      <img className={product.imageFit === 'contain' ? 'image-contain' : ''} src={product.image} alt={product.title} onError={(event) => { event.currentTarget.src = fallback }} />
      <span className="product-badge badge-hot">A LITTLE FAVOURITE</span>
    </div>
  )
}
