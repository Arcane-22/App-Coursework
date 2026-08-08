import "./SupplierForm.css";

const SupplierForm = ({ onSubmit }) => {
  return (
    <form className="supplier-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="e.g. Pixel Distributors" />
      </div>

      <div className="field">
        <label htmlFor="email">Contact Email</label>
        <input type="email" id="email" name="email" required placeholder="e.g. orders@company.com" />
      </div>

      <div className="field">
        <label htmlFor="phone">Contact Phone</label>
        <input type="tel" id="phone" name="phone" required placeholder="e.g. +1 555 555 5555" />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">Save supplier</button>
        <button type="button" className="btn-ghost">Cancel</button>
      </div>
    </form>
  );
};

export default SupplierForm;