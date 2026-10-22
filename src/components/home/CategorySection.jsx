import { categories } from '../../data/categories'
import SectionHeading from '../common/SectionHeading'
import CategoryCard from '../categories/CategoryCard'

export default function CategorySection() {
  return (
    <section className="category-section section-shell" id="categories">
      <SectionHeading kicker="A LITTLE BIT OF EVERYTHING" title={<>Find your <em>kind of thing.</em></>} link="/shop" linkText="All categories" />
      <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.name} category={category} index={index} />)}</div>
    </section>
  )
}
