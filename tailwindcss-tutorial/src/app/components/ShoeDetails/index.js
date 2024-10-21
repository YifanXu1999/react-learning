import nike1 from "../../assets/n1-min.png"
import Image from 'next/image'
export function ShoeDetails () {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row-reverse">
            {/* Show images */}
            <div className="flex-1">
                <div className="bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] to-[#4DD4C6]">
                    <Image src={nike1} alt="abc"></Image>
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
                <div className="space-x-10">
                    <button className="h-14 w-1/2 bg-black text-white hover:bg-gray-900 active:bg-gray-500">
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