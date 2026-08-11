import "./SupplierForm.css";

const SupplierForm = ({ onSubmit, onCancel, initialData = {} }) => {
  return (
    <form className="supplier-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={initialData.name || ""}
          placeholder="e.g. Pixel Distributors"
        />
      </div>

      <div className="field">
        <label htmlFor="email">Contact Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          defaultValue={initialData.email || ""}
          placeholder="e.g. orders@company.com"
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Contact Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          defaultValue={initialData.phone || ""}
          placeholder="e.g. +1 555 555 5555"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">Save supplier</button>
        <button type="button" className="btn-ghost" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default SupplierForm;