// app/admin/page.js
export const dynamic = "force-dynamic";

"use client";

import { useState, useEffect } from "react";
import ProductForm from "@/components/ProductForm";

export default function AdminPage() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛠️ Admin Panel</h1>
      <ProductForm onAdded={loadProducts} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border p-4 rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
