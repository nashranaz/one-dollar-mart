import { Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import WishlistProvider from './context/WishlistContext'
import StoreLayout from './components/layout/StoreLayout'
import About from './pages/About'
import Cart from './pages/Cart'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'
import './App.css'
import EmptyState from './components/common/EmptyState'

function NotFound() {
  return <EmptyState icon="🧭" title="Looks like a little detour." action="Back to the good stuff" />
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route element={<StoreLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="categories" element={<Categories />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </WishlistProvider>
    </CartProvider>
  )
}
