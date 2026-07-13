import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./Layout/Layout";
import Products from "./pages/Products/Products";
import Suppliers from "./pages/Suppliers/Suppliers";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Route>
    </Routes>
  );
};

export default App;