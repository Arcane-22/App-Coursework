import './Suppliers.css';
import SuppliersTable from '../../components/suppliers/SupplierTable';
import { suppliers } from '../../constants/mockData';

const Suppliers = () => {
  return (
    <section className="suppliers">
      <header className="page-header">
        <div>
          <h1>Suppliers</h1>
          <p>Distributors you order stock from.</p>
        </div>
        <button className="btn-primary" type="button">+ Add supplier</button>
      </header>
      <SuppliersTable suppliers={suppliers} />
    </section>
  )
}

export default Suppliers