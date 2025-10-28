"use client";
import { useState } from "react";

export default function ProductForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", slug: "", price: "", inventory: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY,
      },
      body: JSON.stringify(form),
    });
    setForm({ name: "", slug: "", price: "", inventory: "" });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {["name", "slug", "price", "inventory"].map((field) => (
        <input
          key={field}
          placeholder={field}
          className="border p-2 w-full"
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  );
}
