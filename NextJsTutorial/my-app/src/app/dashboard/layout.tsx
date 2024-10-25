"use client";
import Link from "next/link";
import {useState} from "react";


export default function DashboardLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    const [count, setCount] = useState(0)
    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
            <div className="flex justify-between font-bold text-lg mb-4 text-purple-500">
                <Link href="/dashboard/about">About </Link>
                <Link href="/dashboard/settings">Settings </Link>
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white border rounded-2xl p-2" onClick={()=>setCount(count+1)}>Increment</button>
            {children}
        </div>
    );
}
