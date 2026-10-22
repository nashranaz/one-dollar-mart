export default function SortDropdown({ sort, onChange }) {
  return (
    <label className="sort-label">
      Sort by
      <select value={sort} onChange={(event) => onChange(event.target.value)}>
        <option value="featured">Featured</option>
        <option value="low">Price: low to high</option>
        <option value="high">Price: high to low</option>
        <option value="rating">Top rated</option>
        <option value="popular">Most loved</option>
        <option value="newest">Newest</option>
      </select>
    </label>
  )
}
