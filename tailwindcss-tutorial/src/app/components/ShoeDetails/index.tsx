import nike1 from "../../assets/n1-min.png"
import Image from 'next/image'
import {Select} from "@/app/components/Select";
export function ShoeDetails () {
    const QTY: string[] = ["1", "2", "3", "4", "5"]
    const Size: string[] = ["7", "8", "9", "10", "11"]
    return (
        <div className="flex flex-col items-center justify-center md:flex-row-reverse">
            {/* Show images */}
            <div className="flex-1 md:-mt-52">
                <div className="h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] to-[#4DD4C6]">
                    <Image className="animate-float" src={nike1} alt="abc"       width={2000}
                           height={2000} ></Image>
                </div>

            </div>

            <div className="flex-1 space-y-6">
                <div className="text-5xl font-black md:text-6xl">Nike Air Max 270</div>

                <div className="font-medium md:text-xl">
                    {
                        "The Nike Air Max 270 is the best shoe  to ever come out this year"
                    }
                </div>
                <div className="text-3xl font-extrabold md:text-6xl">
                    $100
                </div>
                {/* Select*/}
                <div className="flex flex-row  justify-between p-10">
                    <Select title={"QTY"} options={QTY}></Select>
                    <Select title={"Size"} options={Size}></Select>
                </div>

                {/* Shoe buttons and links */}
                <div className="space-x-10">
                    <button className="btn-press-animate  h-14 w-1/2 bg-black text-white hover:bg-gray-900 active:bg-gray-500">
                        Add to bag
                    </button>
                    <a href="#" className="text-lg font-bold underline underline-offset-4">
                        View Details
                    </a>
                </div>

            </div>
        </div>
    )
}