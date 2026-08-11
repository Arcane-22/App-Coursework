import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductViewCard from "../../components/products/ProductViewCard";
import { getProduct, deleteProduct } from "../../services/api";

const ProductViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
      .catch(() => setNotFound(true));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
      navigate("/products");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <nav aria-label="Breadcrumb">
        <Link to="/products" className="back-link">← Back to products</Link>
      </nav>

      {notFound ? (
        <p role="alert">Product not found.</p>
      ) : product ? (
        <ProductViewCard
          product={product}
          supplier={product.Supplier}
          onEdit={() => navigate(`/products/${product.id}/edit`)}
          onDelete={handleDelete}
        />
      ) : (
        <p>Loading…</p>
      )}
    </main>
  );
};

export default ProductViewPage;