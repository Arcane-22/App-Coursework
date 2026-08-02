import ProductRow from './ProductRow';
import './ProductTable.css';

const ProductTable = ({ products }) => (
  <div className="table-card">
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Supplier</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductRow key={p.id} product={p} />
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;