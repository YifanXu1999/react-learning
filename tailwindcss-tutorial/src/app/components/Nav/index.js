"use client";

import Nikelogo from "@/app/assets/nike-logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import {TbShoppingBag} from "react-icons/tb"

import {useState} from "react";

const ROUTES = [
    'Home',
    'About',
    'Services',
    'Pricing',
    'Contact'
]

export function Nav () {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
    return (
        <nav className="flex flex-wrap justify-between items-center">
            {/*Nike Icon*/}
            <a href="#">
                <Nikelogo className="h-20 w-20 "></Nikelogo>
            </a>
            {/*Nav Button*/}
            <button
                onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                className="focus:ring-2 focus:ring-gray-200 md:hidden">
                <RxHamburgerMenu size={25}></RxHamburgerMenu>
            </button>
            {/*Menu list*/}
            <div className={`${!isMobileMenuShown && "hidden"} w-full md:block md:w-auto`}>
                <ul className="md:space-x-8 flex flex-col md:flex-row md:bg-transparent md:border-none bg-grey-50 border border-gray-100 p4 text-lg rounded-lg">
                    {ROUTES.map((route, index) => {
                        return (
                            <li key={index} className={`cursor-pointer rounded px-3 py-2
                                ${index === 0 
                                ? "bg-blue-400 text-white md:bg-transparent md:text-blue-500" 
                                : "hover:bg-red-400"}
                            `}>
                                {route}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/*Shopping Bag*/}
            <div className="fixed bottom-4 left-4 lg:static">
                <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
                    <TbShoppingBag></TbShoppingBag>
                </div>
            </div>

        </nav>


    )
}