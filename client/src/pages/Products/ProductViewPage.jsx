import { Link, useParams, useNavigate } from "react-router-dom";
import ProductViewCard from "../../components/products/ProductViewCard";
import { products, suppliers } from "../../constants/mockData";

const ProductViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === id);
  const supplier = product ? suppliers.find((s) => s.id === product.supplierId) : null;

  return (
    <main>
      <nav aria-label="Breadcrumb">
        <Link to="/products" className="back-link">← Back to products</Link>
      </nav>

      {product ? (
        <ProductViewCard
          product={product}
          supplier={supplier}
          onEdit={() => navigate(`/products/${product.id}/edit`)}
          onDelete={() => console.log("delete", product.id)}
        />
      ) : (
        <p role="alert">Product not found.</p>
      )}
    </main>
  );
};

export default ProductViewPage;