import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const adminKey = req.headers.get("x-admin-key");
  if (adminKey !== process.env.ADMIN_KEY)
    return new Response("Unauthorized", { status: 401 });

  const product = await Product.create(data);
  return Response.json(product);
}
