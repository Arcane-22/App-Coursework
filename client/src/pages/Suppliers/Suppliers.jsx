import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SuppliersTable from "../../components/suppliers/SupplierTable";
import { getSuppliers } from "../../services/api";
import "./Suppliers.css";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSuppliers()
      .then((data) => {
        setSuppliers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="suppliers">
      <header className="page-header">
        <div>
          <h1>Suppliers</h1>
          <p>Distributors you order stock from.</p>
        </div>
        <Link to="/suppliers/new" className="btn-primary">+ Add supplier</Link>
      </header>

      {loading ? <p>Loading…</p> : <SuppliersTable suppliers={suppliers} />}
    </section>
  );
};

export default Suppliers;