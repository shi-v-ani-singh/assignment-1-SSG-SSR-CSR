import Link from "next/link";
export const dynamic = "force-dynamic";

const page = () => {

    const serverTime = new Date().toLocaleTimeString();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">SSR – Server Side Rendering</h1>
            <p className="text-gray-600">Server Time</p>
            <h2 className="text-xl font-semibold">{serverTime}</h2>
            <p className="text-sm text-gray-500">
                Time updates on every page refresh.
            </p>
            <Link href="/ssg" className="px-4 py-2 bg-blue-500 text-white rounded">
                SSG
            </Link>
            <Link href="/csr" className="px-4 py-2 bg-purple-500 text-white rounded">
                CSR
            </Link>
        </div>
    )
}

export default page












// // fetch('api',{cache:'no-store'})