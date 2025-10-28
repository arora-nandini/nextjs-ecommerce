import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm p-4 flex justify-center gap-6">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
