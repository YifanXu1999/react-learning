"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {text} from "node:stream/consumers";

const linkData = [
    {name: "Performance", href: "/performance"},
    {name: "Reliability", href: "/reliability"},
    {name: "Scale", href: "/scale"},
]

export default function Header() {
    const pathName = usePathname();
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between mx-auto container text-white py-8">
                <Link href="/" className="text-3xl font-bold">Home</Link>
                <div className="text-xl space-x-4">
                    {linkData
                        .map(link =>
                            <Link className={pathName === link.href ? "text-pink-400" : ""} key={link.name} href={link.href}>
                                {link.name}
                            </Link>
                    )}
                </div>
            </div>

        </div>
    )
}