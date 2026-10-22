import { useCart } from '../context/cartStore'
import CartList from '../components/cart/CartList'
import CartSummary from '../components/cart/CartSummary'
import EmptyState from '../components/common/EmptyState'

export default function Cart() {
  const { cart, updateQuantity, clearCart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <section className="cart-page section-shell">
      <div className="eyebrow"><span className="eyebrow-dot" /> YOUR LITTLE BAG</div>
      <h1>Good things, <em>gathered.</em></h1>
      {cart.length ? (
        <div className="cart-layout">
          <CartList cart={cart} onQuantityChange={updateQuantity} onClear={clearCart} />
          <CartSummary subtotal={subtotal} />
        </div>
      ) : (
        <EmptyState icon="🛍️" title="Your bag is taking a little nap." action="Find a little something">
          There’s nothing in here just yet. Your next little favourite is waiting.
        </EmptyState>
      )}
    </section>
  )
}
