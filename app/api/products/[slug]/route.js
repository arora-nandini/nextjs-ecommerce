import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";

export async function GET(_, context) {
  const { params } = await context; // ✅ await required
  await connectDB();
  const product = await Product.findOne({ slug: params.slug });
  if (!product) return new Response("Not Found", { status: 404 });
  return Response.json(product);
}

export async function PUT(req, context) {
  const { params } = await context;
  await connectDB();
  const adminKey = req.headers.get("x-admin-key");
  if (adminKey !== process.env.ADMIN_KEY)
    return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const updated = await Product.findOneAndUpdate(
    { slug: params.slug },
    body,
    { new: true }
  );
  return Response.json(updated);
}
