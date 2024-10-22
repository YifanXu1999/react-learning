'use client'
import {Nav} from "@/app/components/Nav";
import {ShoeDetails} from "@/app/components/ShoeDetails";
import {Card, SHOE_LIST} from "@/app/components/Card";
import {NewArrivalSection} from "@/app/components/NewArrivalSection";
import {SideBar} from "@/app/components/SideBar";
import {useState} from "react";

const MainPage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    return (
        <div className="animate-fadeIn px-10 py-5 md:px-20">

            <Nav onClickShoppingButton={setIsSideBarOpen}/>
            <ShoeDetails/>
            <NewArrivalSection items={SHOE_LIST}></NewArrivalSection>
            <SideBar open={isSideBarOpen} onClickClose={()=>setIsSideBarOpen(false)} children={"hi"}></SideBar>
        </div>
    )
}

export default MainPage