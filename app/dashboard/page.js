import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await connectDB();
  const products = await Product.find();
  const lowStock = products.filter((p) => p.inventory < 5);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Dashboard</h1>
      <p>Total Products: {products.length}</p>
      <p>Low Stock: {lowStock.length}</p>
    </div>
  );
}
