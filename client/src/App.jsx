import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./Layout/Layout";
import Products from "./pages/Products/Products";
import ProductFormPage from "./pages/Products/ProductFormPage";
import ProductViewPage from "./pages/Products/ProductViewPage";
import Suppliers from "./pages/Suppliers/Suppliers";
import SupplierFormPage from "./pages/Suppliers/SupplierFormPage";
import ProtectedRoute from "./components/shared/ProtectedRoute";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<ProductFormPage />} />
        <Route path="/products/:id/edit" element={<ProductFormPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/suppliers/new" element={<SupplierFormPage />} />
        <Route path="/suppliers/:id/edit" element={<SupplierFormPage />} />
      </Route>
    </Routes>
  );
};

export default App;