"use client";
import { useState, useEffect } from "react";
import ProductForm from "@/components/ProductForm";

export default function AdminPage() {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const res = await fetch("/api/products");
    setProducts(await res.json());
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Admin Panel</h1>
      <ProductForm onSuccess={load} />
      <div className="mt-6 grid grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p._id} className="p-3 border rounded">
            {p.name} - ${p.price}
          </div>
        ))}
      </div>
    </div>
  );
}
