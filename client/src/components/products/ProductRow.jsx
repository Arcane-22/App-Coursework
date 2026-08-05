import './ProductRow.css';

const LOW_STOCK_THRESHOLD = 5;

const ProductRow = ({ product }) => {
  const { name, supplierName, price, quantity } = product;
  const isLow = quantity < LOW_STOCK_THRESHOLD;

  return (
    <tr>
      <td>
        <div className="product-cell">
          <span className="product-icon" aria-hidden="true">📦</span>
          <span className="product-name">{name}</span>
        </div>
      </td>
      <td>{supplierName}</td>
      <td>${price.toFixed(2)}</td>
      <td className={isLow ? 'stock-low' : ''}>{quantity}</td>
    </tr>
  );
};

export default ProductRow;