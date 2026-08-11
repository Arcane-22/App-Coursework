import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onSubmit, suppliers, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [price, setPrice] = useState(initialData.price ?? "");
  const [quantity, setQuantity] = useState(initialData.quantity ?? "");
  const [supplierId, setSupplierId] = useState(initialData.supplierId || "");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("supplierId", supplierId);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. PlayStation 5 Console (Slim)" />
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short product description" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="price">Price ($)</label>
          <input type="number" id="price" min="0" step="0.01" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0.00" />
        </div>
        <div className="field">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" min="0" step="1" required value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="0" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="supplierId">Supplier</label>
        <select id="supplierId" required value={supplierId} onChange={(e) => setSupplierId(e.target.value)}>
          <option value="" disabled>Select a supplier…</option>
          {suppliers.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="image">Product image</label>
        <label htmlFor="image" className="upload-box">
          {image ? image.name : "Choose file"}
        </label>
        <input type="file" id="image" accept="image/*" className="hidden-input" onChange={(e) => setImage(e.target.files[0])} />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">Save product</button>
      </div>
    </form>
  );
};

export default ProductForm;