import { Link } from "react-router-dom";
import { LOW_STOCK_THRESHOLD } from "../../constants/productStats";
import BASE_URL from "../../services/api.js";
import "./ProductRow.css";

const ProductRow = ({ product }) => {
  const { id, name, image, supplierName, price, quantity } = product;
  const isLow = quantity < LOW_STOCK_THRESHOLD;

  return (
    <tr>
      <td>
        <Link to={`/products/${id}`} className="product-cell">
          <span className="product-icon">
            {image ? (
              <img src={`${BASE_URL}${image}`} alt="" />
            ) : (
              <span aria-hidden="true">📦</span>
            )}
          </span>
          <span className="product-name">{name}</span>
        </Link>
      </td>
      <td>{supplierName}</td>
      <td>${price.toFixed(2)}</td>
      <td className={isLow ? "stock-low" : ""}>{quantity}</td>
    </tr>
  );
};

export default ProductRow;