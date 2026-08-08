import './Suppliers.css';
import SuppliersTable from '../../components/suppliers/SupplierTable';
import { suppliers } from '../../constants/mockData';
import { Link } from 'react-router-dom';

const Suppliers = () => {
  return (
    <section className="suppliers">
      <header className="page-header">
        <div>
          <h1>Suppliers</h1>
          <p>Distributors you order stock from.</p>
        </div>
        <Link to="/suppliers/new" className="btn-primary">+ Add supplier</Link>
      </header>
      <SuppliersTable suppliers={suppliers} />
    </section>
  )
}

export default Suppliers