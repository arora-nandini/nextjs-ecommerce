import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Link from "next/link";

export const revalidate = 60;

export async function generateStaticParams() {
  await connectDB();
  const products = await Product.find({}, "slug");
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }) {
  await connectDB();
  const product = await Product.findOne({ slug: params.slug });

  if (!product)
    return (
      <div className="p-6 text-red-500">
        Product not found. <Link href="/">Go back</Link>
      </div>
    );

  return (
    <div className="p-6">
      <Link href="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-semibold mt-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
    </div>
  );
}
