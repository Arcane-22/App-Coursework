import './SupplierRow.css';

const SupplierRow = ({ supplier }) => {
  const { name, email, phone} = supplier;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default SupplierRow;