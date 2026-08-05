import './ProductToolbar.css';

const ProductToolbar = ({ search, onSearchChange, suppliers, filter, onFilterChange }) => (
  <div className="toolbar">
    <label className="search-box">
      <input
        type="search"
        placeholder="Search products…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </label>
    <label className="filter-box">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All suppliers</option>
        {suppliers.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
    </label>
  </div>
);

export default ProductToolbar;