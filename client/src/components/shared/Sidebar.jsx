import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LOW_STOCK_THRESHOLD } from "../../constants/productStats";
import { getProducts } from "../../services/api.js";
import "./Sidebar.css";

const Sidebar = () => {
  const [healthPct, setHealthPct] = useState(100);

  useEffect(() => {
    getProducts()
      .then((products) => {
        if (products.length === 0) return;
        const lowStockCount = products.filter((p) => p.quantity < LOW_STOCK_THRESHOLD).length;
        const pct = Math.round(100 - (lowStockCount / products.length) * 100);
        setHealthPct(pct);
      })
      .catch(() => {});
  }, []);
  
  return (
    <aside className="sidebar">
      <header className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#7B5CFA" }}
        >
          <line x1="6" x2="10" y1="11" y2="11" />
          <line x1="8" x2="8" y1="9" y2="13" />
          <line x1="15" x2="15.01" y1="12" y2="12" />
          <line x1="18" x2="18.01" y1="10" y2="10" />
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
        </svg>
        <h1>PixelStock</h1>
      </header>

      <p className="user">
        <strong>Admin</strong>
      </p>

      <section className="health">
        <h3>Stock health</h3>
        <progress value={healthPct} max="100">{healthPct}%</progress>
        <p>{healthPct}%</p>
      </section>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/products">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/suppliers">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
                <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
              </svg>
              Suppliers
            </NavLink>
          </li>
        </ul>
      </nav>

      <footer className="sidebar-footer">
        <Link to="/">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log out
        </Link>
      </footer>
    </aside>
  );
};

export default Sidebar;