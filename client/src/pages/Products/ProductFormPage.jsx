import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductForm from "../../components/products/ProductForm";
import { getProduct, getSuppliers, createProduct, updateProduct } from "../../services/api";
import "./ProductFormPage.css";

const ProductFormPage = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [suppliers, setSuppliers] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSuppliers()
      .then(setSuppliers)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!isEditing) return;

    getProduct(id)
      .then(setProduct)
      .catch((err) => console.error(err));
  }, [id, isEditing]);

  const handleSubmit = async (formData) => {
    try {
      if (isEditing) {
        await updateProduct(id, formData);
      } else {
        await createProduct(formData);
      }
      navigate("/products");
    } catch (err) {
      console.error(err);
    }
  };

  if (isEditing && !product) return <p>Loading…</p>;

  return (
    <main>
      <Link to="/products" className="back-link">
      ← Back to products
      </Link>
      <header className="page-header">
        <h1>{isEditing ? "Edit product" : "Add product"}</h1>
      </header>
      <div className="form-card">
        <ProductForm
          suppliers={suppliers}
          onSubmit={handleSubmit}
          initialData={product || {}}
        />
      </div>
    </main>
  );
};

export default ProductFormPage;