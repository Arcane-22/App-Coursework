import SupplierRow from './SupplierRow';
import './SupplierTable.css';

const SupplierTable = ({ suppliers }) => (
  <div className="table-card">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((s) => (
          <SupplierRow key={s.id} supplier={s} />
        ))}
      </tbody>
    </table>
  </div>
);

export default SupplierTable;