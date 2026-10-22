import { ArrowRight, Check } from 'lucide-react'
import { money } from '../../utils/format'

export default function CartSummary({ subtotal }) {
  const delivery = subtotal === 0 || subtotal >= 1500 ? 0 : 150
  return (
    <aside className="order-summary">
      <h2>Your little total</h2>
      <div><span>Subtotal</span><b>{money(subtotal)}</b></div>
      <div><span>Delivery</span><b>{delivery === 0 ? 'On us!' : money(delivery)}</b></div>
      {subtotal > 0 && subtotal < 1500 && <p className="delivery-hint">Add {money(1500 - subtotal)} for free delivery.</p>}
      <div className="summary-total"><span>Total</span><b>{money(subtotal + delivery)}</b></div>
      <button className="button button-dark checkout-button" onClick={() => window.alert('Thanks for shopping! Checkout is ready to connect to your payment provider.')}>Continue to checkout <ArrowRight size={16} /></button>
      <p className="checkout-note"><Check size={13} /> Safe, simple and secure checkout</p>
    </aside>
  )
}
