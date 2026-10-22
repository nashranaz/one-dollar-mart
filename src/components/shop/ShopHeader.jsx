import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ShopHeader({ category, query }) {
  return (
    <>
      <div className="shop-topline">
        <Link to="/" className="back-link"><ArrowLeft size={15} /> Back to the good stuff</Link>
        <span>THE LITTLE FIND SHOP <i>✳</i></span>
      </div>
      <div className="shop-heading">
        <div className="eyebrow"><span className="eyebrow-dot" /> LITTLE PRICES, LOTS TO LOVE</div>
        <h1>{category ? <>{category}<em> finds.</em></> : query ? <>Search <em>finds.</em></> : <>The good <em>stuff.</em></>}</h1>
        <p>Useful little things and happy everyday favourites — all in one place.</p>
      </div>
    </>
  )
}
