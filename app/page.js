// app/page.js
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  // ✅ Use a relative path instead of localhost
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/products`, {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}
