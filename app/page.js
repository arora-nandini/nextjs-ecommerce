import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  if (!products || products.length === 0)
    return <div className="p-6">No products yet. Add some in /admin.</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}
