"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">CSR – Client Side Rendering</h1>
            <p className="text-gray-600">Live Time</p>
            <h2 className="text-xl font-semibold">{time}</h2>
            <p className="text-sm text-gray-500">
                Time updates every second without refreshing.
            </p>
            <Link href="/ssg" className="px-4 py-2 bg-blue-500 text-white rounded">
          SSG
        </Link>
        <Link href="/ssr" className="px-4 py-2 bg-green-500 text-white rounded">
          SSR
        </Link>
        </div>
    )
}

export default page

