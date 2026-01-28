import Link from "next/link";
export const dynamic = "force-static";

const page = () => {

    const buildTime = new Date().toLocaleTimeString();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">SSG – Static Site Gneration</h1>
            <p className="text-gray-600">Build Time</p>
            <h2 className="text-xl font-semibold">{buildTime}</h2>
            <p className="text-sm text-gray-500">
                Time does not change untill the next build.
            </p>
            <Link href="/ssr" className="px-4 py-2 bg-green-500 text-white rounded">
                SSR
            </Link>
            <Link href="/csr" className="px-4 py-2 bg-purple-500 text-white rounded">
                CSR
            </Link>
        </div>
    )
}

export default page
