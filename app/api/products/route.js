// app/api/products/route.js
export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";

// GET all products
export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return Response.json(products);
}

// POST a new product
export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const product = await Product.create(body);
  return Response.json(product);
}
