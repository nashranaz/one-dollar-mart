import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange, className = '' }) {
  return (
    <div className={`quantity-control ${className}`}>
      <button aria-label="Decrease quantity" onClick={() => onChange(Math.max(0, quantity - 1))}><Minus size={13} /></button>
      <b>{quantity}</b>
      <button aria-label="Increase quantity" onClick={() => onChange(quantity + 1)}><Plus size={13} /></button>
    </div>
  )
}
