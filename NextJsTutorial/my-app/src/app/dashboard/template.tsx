"use client"
import React, {useState} from "react";
import Link from "next/link";

export default function Template(    {children}: {children:React.ReactNode}) {
    const [count, addCount] = useState(0)
    return (

        <div className="border-2 border-dashed border-black p-4  mx-auto mt-10">
            <div className="flex justify-between font-bold text-lg mb-4 text-purple-500">
            </div>
            <h2>Dashboard Template {count}</h2>
            <button className="bg-black text-white border rounded-2xl p-2" onClick={()=>addCount(count+1)} >Increment</button>
            {children}
        </div>
    )
}