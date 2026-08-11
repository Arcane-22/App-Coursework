import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StatCard from "../../components/ui/StatCard";
import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import { getProductStats } from "../../constants/productStats";
import { getProducts, getSuppliers } from "../../services/api";
import "./Products.css";

const Products = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProducts(), getSuppliers()])
      .then(([productsData, suppliersData]) => {
        setProducts(Array.isArray(productsData) ? productsData : []);
        setSuppliers(Array.isArray(suppliersData) ? suppliersData : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const stats = getProductStats(products, suppliers);

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "all" || String(p.supplierId) === filter),
    )
    .map((p) => ({
      ...p,
      supplierName: p.Supplier?.name ?? "--",
    }));

  return (
    <section className="products">
      <header className="page-header">
        <div>
          <h1>Products</h1>
          <p>Games, consoles &amp; gear currently on the shelf.</p>
        </div>
        <Link to="/products/new" className="btn-primary">+ Add product</Link>
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

      {loading ? <p>Loading…</p> : <ProductTable products={filteredProducts} />}
    </section>
  );
};

export default Products;