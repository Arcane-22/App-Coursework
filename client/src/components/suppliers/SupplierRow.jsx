import { useNavigate } from "react-router-dom";
import "./SupplierRow.css";

const SupplierRow = ({ supplier }) => {
  const navigate = useNavigate();
  const { id, name, email, phone } = supplier;

  return (
    <tr
      onClick={() => navigate(`/suppliers/${id}/edit`)}
      className="supplier-row"
    >
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default SupplierRow;