import { Link, useParams } from "react-router-dom";
import ProductForm from "../../components/products/ProductForm";
import { suppliers } from "../../constants/mockData";
import './ProductFormPage.css';

const ProductFormPage = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);

  return (
    <main>
        <Link to="/products" className="back-link">
            Back to products
        </Link>

        <header className="page-header">
            <h1>{isEditing ? "Edit product" : "Add product"}</h1>
        </header>
        <div className="form-card">
            <ProductForm suppliers={suppliers} />
        </div>

    </main>
  );
};

export default ProductFormPage;