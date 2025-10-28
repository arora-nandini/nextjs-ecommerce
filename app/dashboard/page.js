// app/dashboard/page.js
export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";

export default async function DashboardPage() {
  await connectDB();
  const products = await Product.find({}).lean();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Inventory Dashboard</h1>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">${p.price}</td>
              <td className="border p-2">{p.stock || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
