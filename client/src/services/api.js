const BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_BASE_DEV
  : import.meta.env.VITE_API_BASE_PROD;

  export default BASE_URL;

function getToken() {
  return localStorage.getItem("token");
}

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body && !(options.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
      Authorization: `Bearer ${getToken()}`,
      ...options.headers,
    },
  });

  if (!res.ok) {
    let errorMessage = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      errorMessage = data.error || data.message || errorMessage;
    } catch {
      // response wasn't JSON, keep default message
    }
    throw new Error(errorMessage);
  }

  if (res.status === 204) return null;
  return res.json();
}

// Products
export function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return request(`/products${query ? `?${query}` : ""}`);
}

export function getProduct(id) {
  return request(`/products/${id}`);
}

export function createProduct(formData) {
  return request("/products", { method: "POST", body: formData });
}

export function updateProduct(id, formData) {
  return request(`/products/${id}`, { method: "PUT", body: formData });
}

export function deleteProduct(id) {
  return request(`/products/${id}`, { method: "DELETE" });
}

// Suppliers
export function getSuppliers() {
  return request("/suppliers");
}

export function getSupplier(id) {
  return request(`/suppliers/${id}`);
}

export function createSupplier(data) {
  return request("/suppliers", { method: "POST", body: JSON.stringify(data) });
}

export function updateSupplier(id, data) {
  return request(`/suppliers/${id}`, { method: "PUT", body: JSON.stringify(data) });
}

export function deleteSupplier(id) {
  return request(`/suppliers/${id}`, { method: "DELETE" });
}