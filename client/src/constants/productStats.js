export const LOW_STOCK_THRESHOLD = 5;

export function getProductStats(products, suppliers) {
  const totalProducts = products.length;
  const lowStock = products.filter((p) => p.quantity < LOW_STOCK_THRESHOLD).length;
  const totalSuppliers = suppliers.length;
  const inventoryValue = products.reduce(
    (sum, p) => sum + Number(p.price) * Number(p.quantity),
    0,
  );

  return [
    { variant: "primary", value: totalProducts, label: "Total products", icon: "📦" },
    { variant: "alert", value: lowStock, label: "Low stock", icon: "⚠️" },
    { variant: "cyan", value: totalSuppliers, label: "Suppliers", icon: "🏢" },
    {
      variant: "amber",
      value: `$${inventoryValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      label: "Inventory value",
      icon: "$",
    },
  ];
}