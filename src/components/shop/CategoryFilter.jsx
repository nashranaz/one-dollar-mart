import { categories } from '../../data/categories'

export default function CategoryFilter({ category, onChange }) {
  return (
    <div className="filter-group">
      <b>Browse by</b>
      <div className="filter-chips">
        <button className={!category ? 'selected' : ''} onClick={() => onChange('')}>Everything</button>
        {categories.map((item) => (
          <button key={item.name} className={category === item.name ? 'selected' : ''} onClick={() => onChange(category === item.name ? '' : item.name)}>
            {item.emoji} {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}
