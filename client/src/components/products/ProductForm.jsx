import './ProductForm.css';

const ProductForm = ({ onSubmit, suppliers }) => {
  return (
    <form className="product-form" onSubmit={onSubmit}>
        <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="e.g. PlayStation 5 Console (Slim)" />
        </div>

        <div className="field">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Short product description" />
        </div>

        <div className="field-row">
            <div className="field">
            <label htmlFor="price">Price ($)</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required placeholder="0.00" />
            </div>
            <div className="field">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="0" step="1" required placeholder="0" />
            </div>
        </div>

        <div className="field">
            <label htmlFor="supplierId">Supplier</label>
            <select id="supplierId" name="supplierId" required defaultValue="">
            <option value="" disabled>Select a supplier…</option>
            {suppliers.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
            ))}
            </select>
        </div>

        <div className="field">
        <label htmlFor="image">Product image</label>
        <label htmlFor="image" className="upload-box">
            Choose file
        </label>
        <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden-input"
        />
        </div>

        <div className="form-actions">
            <button type="submit" className="btn-primary">Save product</button>
            <button type="button" className="btn-ghost">Cancel</button>
        </div>
    </form>
  );
};

export default ProductForm;