import "./ProductViewCard.css";
import BASE_URL from "../../services/api.js";

const conditionLabels = { new: "New", used: "Used", refurb: "Refurbished" };
const conditionClass = { new: "cond-new", used: "cond-used", refurb: "cond-refurb" };

const ProductViewCard = ({ product, supplier, onEdit, onDelete }) => {
  return (
    <article className="form-card view-card">
      <div className="view-grid">
        <figure className="view-image">
          {product.image ? (
            <img src={`${BASE_URL}${product.image}`} alt={product.name} />
          ) : (
            <span className="view-image-placeholder">📦</span>
          )}
        </figure>

        <div className="view-details">
          <div className="view-title-row">
            <h3>{product.name}</h3>
            {product.condition && (
              <span className={`badge ${conditionClass[product.condition]}`}>
                {conditionLabels[product.condition]}
              </span>
            )}
          </div>

          {product.description && (
            <p className="view-description">{product.description}</p>
          )}

          <dl className="view-stats">
            <div>
              <dt className="stat-label">Price</dt>
              <dd className="stat-value">${Number(product.price).toFixed(2)}</dd>
            </div>
            <div>
              <dt className="stat-label">In stock</dt>
              <dd className={`stat-value ${product.quantity < 5 ? "stock-low" : ""}`}>
                {product.quantity} units
              </dd>
            </div>
          </dl>

          {supplier && (
            <address className="view-supplier">
              <p className="stat-label">Supplier</p>
              <p className="supplier-row supplier-name">{supplier.name}</p>
              <p className="supplier-row">{supplier.email}</p>
              <p className="supplier-row">{supplier.phone}</p>
            </address>
          )}

          <footer className="form-actions">
            <button type="button" className="btn-primary" onClick={onEdit}>
              Edit product
            </button>
            <button type="button" className="btn-ghost btn-danger" onClick={onDelete}>
              Delete product
            </button>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ProductViewCard;