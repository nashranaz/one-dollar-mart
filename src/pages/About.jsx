import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AboutHero from '../components/about/AboutHero'
import AboutContent from '../components/about/AboutContent'
import WhyChooseUs from '../components/about/WhyChooseUs'

export default function About() {
  return (
    <section className="about-page section-shell">
      <AboutHero />
      <AboutContent />
      <WhyChooseUs />
      <Link className="button button-dark about-cta" to="/shop">Find your little favourite <ArrowRight size={16} /></Link>
    </section>
  )
}
