import { useOutletContext } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import CategorySection from '../components/home/CategorySection'
import DealBanner from '../components/home/DealBanner'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PromoBanner from '../components/home/PromoBanner'
import NewsletterSection from '../components/home/NewsletterSection'

export default function Home() {
  const { openQuickView } = useOutletContext()
  return (
    <>
      <HeroSection />
      <DealBanner />
      <CategorySection />
      <FeaturedProducts onQuickView={openQuickView} />
      <PromoBanner />
      <NewsletterSection />
    </>
  )
}
