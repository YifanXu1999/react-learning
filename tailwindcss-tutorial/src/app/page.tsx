'use client'
import {Nav} from "@/app/components/Nav";
import {ShoeDetails} from "@/app/components/ShoeDetails";
import {Card, SHOE_LIST} from "@/app/components/Card";
import {NewArrivalSection} from "@/app/components/NewArrivalSection";
import {SideBar} from "@/app/components/SideBar";
import {useState} from "react";
import {CartItem} from "@/app/components/CartItem";

const MainPage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    return (
        <div className="animate-fadeIn px-10 py-5 md:px-20">

            <Nav onClickShoppingButton={setIsSideBarOpen}/>
            <ShoeDetails/>
            <NewArrivalSection items={SHOE_LIST}></NewArrivalSection>
            <SideBar open={isSideBarOpen} onClickClose={() => setIsSideBarOpen(false)} >
                <h2 className=" text-2xl font-bold mb-10">Cart</h2>
                <CartItem item={SHOE_LIST[0]}></CartItem>
                <CartItem item={SHOE_LIST[1]}></CartItem>
                <CartItem item={SHOE_LIST[2]}></CartItem>
            </SideBar>

        </div>
    )
}

export default MainPage