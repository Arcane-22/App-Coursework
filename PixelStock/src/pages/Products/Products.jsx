import { useState } from 'react';
import StatCard from '../../components/ui/StatCard';
import ProductToolbar from '../../components/products/ProductToolbar';
import ProductTable from '../../components/products/ProductTable';
import { stats } from '../../constants/productStats';
import { products, suppliers } from '../../constants/mockData';
import './Products.css';

const Products = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

const filteredProducts = products
  .filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'all' || String(p.supplierId) === filter)
  )
  .map((p) => ({
    ...p,
    supplierName: suppliers.find((s) => s.id === p.supplierId)?.name ?? '--',
  }));

  return (
    <section className="products">
      <header className="page-header">
        <div>
          <h1>Products</h1>
          <p>Games, consoles &amp; gear currently on the shelf.</p>
        </div>
        <button className="btn-primary" type="button">+ Add product</button>
      </header>

      <ul className="stats-row">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </ul>

      <ProductToolbar
        search={search}
        onSearchChange={setSearch}
        suppliers={suppliers}
        filter={filter}
        onFilterChange={setFilter}
      />

      <ProductTable products={filteredProducts} />
    </section>
  );
};

export default Products;