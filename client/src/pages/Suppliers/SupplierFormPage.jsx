import { Link, useParams } from "react-router-dom";
import SupplierForm from "../../components/suppliers/SupplierForm";
import './SupplierFormPage.css';

const SupplierFormPage = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);

  return (
    <main>
        <Link to="/suppliers" className="back-link">
            Back to suppliers
        </Link>

        <header className="page-header">
            <h1>{isEditing ? "Edit supplier" : "Add supplier"}</h1>
        </header>

        <div className="form-card">
            <SupplierForm />
        </div>
    </main>
  );
};

export default SupplierFormPage;