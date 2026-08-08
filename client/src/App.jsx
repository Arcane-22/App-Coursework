import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./Layout/Layout";
import Products from "./pages/Products/Products";
import ProductFormPage from "./pages/Products/ProductFormPage";
import Suppliers from "./pages/Suppliers/Suppliers";
import SupplierFormPage from "./pages/Suppliers/SupplierFormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Products />} />
        <Route path="/products/new" element={<ProductFormPage />} />
        <Route path="/products/:id/edit" element={<ProductFormPage />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/suppliers/new" element={<SupplierFormPage />} />
        <Route path="/suppliers/:id/edit" element={<SupplierFormPage />} />
      </Route>
    </Routes>
  );
};

export default App;