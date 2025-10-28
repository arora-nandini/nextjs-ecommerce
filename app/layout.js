import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js E-commerce",
  description: "A small e-commerce project built with Next.js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ✅ Header + Navigation */}
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-4">
            <h1 className="text-2xl font-bold">🛍️ Next.js E-Commerce</h1>

            {/* ✅ Navigation Links */}
            <nav className="flex gap-6 text-gray-700 font-medium mt-2 md:mt-0">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
              <Link href="/admin" className="hover:text-blue-600">Admin</Link>
            </nav>
          </div>
        </header>

        {/* ✅ Main content (page content) */}
        <main className="max-w-6xl mx-auto p-6">{children}</main>

        {/* ✅ Footer */}
        <footer className="text-center p-4 text-sm text-gray-600 border-t">
          © {new Date().getFullYear()} Nandini Arora | Next.js Assignment
        </footer>
      </body>
    </html>
  );
}
