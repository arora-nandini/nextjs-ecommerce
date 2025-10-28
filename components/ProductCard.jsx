import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="p-4 border rounded hover:shadow-md transition">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
