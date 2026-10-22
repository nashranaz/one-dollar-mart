import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { money } from '../../utils/format'
import QuantitySelector from './QuantitySelector'

export default function CartItem({ item, onQuantityChange }) {
  return (
    <div className="cart-item">
      <Link to={`/product/${item.id}`} className="cart-item-image"><img src={item.image} alt={item.title} /></Link>
      <div className="cart-item-info">
        <span>{item.category}</span>
        <Link to={`/product/${item.id}`}>{item.title}</Link>
        <b>{money(item.price)}</b>
        <QuantitySelector quantity={item.quantity} onChange={(quantity) => onQuantityChange(item.id, quantity)} className="cart-quantity" />
      </div>
      <div className="cart-item-total"><b>{money(item.price * item.quantity)}</b><button aria-label={`Remove ${item.title}`} onClick={() => onQuantityChange(item.id, 0)}><Trash2 size={15} /></button></div>
    </div>
  )
}
