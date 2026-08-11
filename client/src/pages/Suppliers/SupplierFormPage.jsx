import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SupplierForm from "../../components/suppliers/SupplierForm";
import { getSupplier, createSupplier, updateSupplier } from "../../services/api";
import "./SupplierFormPage.css";

const SupplierFormPage = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    if (!isEditing) return;

    getSupplier(id)
      .then(setSupplier)
      .catch((err) => console.error(err));
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      if (isEditing) {
        await updateSupplier(id, data);
      } else {
        await createSupplier(data);
      }
      navigate("/suppliers");
    } catch (err) {
      console.error(err);
    }
  };

  if (isEditing && !supplier) return <p>Loading…</p>;

  return (
    <main>
      <Link to="/suppliers" className="back-link">
        ← Back to suppliers
      </Link>

      <header className="page-header">
        <h1>{isEditing ? "Edit supplier" : "Add supplier"}</h1>
      </header>

      <div className="form-card">
        <SupplierForm
          onSubmit={handleSubmit}
          onCancel={() => navigate("/suppliers")}
          initialData={supplier || {}}
        />
      </div>
    </main>
  );
};

export default SupplierFormPage;