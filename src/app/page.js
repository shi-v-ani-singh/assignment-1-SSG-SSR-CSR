import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Next.js Rendering Methods</h1>

      <div className="flex gap-4">
        <Link href="/ssg" className="px-4 py-2 bg-blue-500 text-white rounded">
          SSG
        </Link>
        <Link href="/ssr" className="px-4 py-2 bg-green-500 text-white rounded">
          SSR
        </Link>
        <Link href="/csr" className="px-4 py-2 bg-purple-500 text-white rounded">
          CSR
        </Link>
      </div>
    </main>
  );
}
