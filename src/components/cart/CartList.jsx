import { ArrowLeft, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function CartList({ cart, onQuantityChange, onClear }) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <div className="cart-items">
      <div className="cart-list-heading">
        <span>{count} happy little finds</span>
        <button onClick={onClear}><Trash2 size={14} /> Clear bag</button>
      </div>
      {cart.map((item) => <CartItem key={item.id} item={item} onQuantityChange={onQuantityChange} />)}
      <Link className="text-link continue-shopping" to="/shop"><ArrowLeft size={15} /> Keep finding little things</Link>
    </div>
  )
}
