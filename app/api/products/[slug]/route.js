import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default async function ProductDetail({ params }) {
  await connectDB();

  // Use try/catch to handle missing data gracefully
  try {
    const product = await Product.findOne({ slug: params.slug }).lean();
    if (!product) return notFound();

    return (
      <div className="p-6">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="font-bold mt-4">${product.price}</p>
      </div>
    );
  } catch (err) {
    console.error("Error fetching product:", err);
    return (
      <div className="p-6 text-red-600">
        <h2>Product not found or failed to load.</h2>
      </div>
    );
  }
}
