import Image from "next/image";
import {CiTrash} from "react-icons/ci";
import {Select} from "../Select";

export function CartItem({item}) {
    const QTY = ["1", "2", "3", "4", "5"]
    const Size = ["7", "8", "9", "10", "11"]
    return (

        <div className="flex m-2 p-2 hover:bg-yellow-100 bg-gray-100">
            <Image className="h-24 w-24" src={item.src} alt=""></Image>
            <div className="flex flex-col">
                <div className="flex">
                    <div className=" space-y-2">
                        <div className="font-bold">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                    <div>${item.price}</div>
                </div>
                <div className="flex justify-between scale-75 -mx-10">
                    <div className="flex space-x-5 scale-50 ">
                        <div >
                            <div>SIZE</div>
                            <Select title="" options={QTY}></Select>
                        </div>
                        <div>
                            <div>QTY</div>
                            <Select title="" options={Size}></Select>
                        </div>
                    </div>

                    <button>
                        <CiTrash></CiTrash>
                    </button>
                </div>


            </div>


        </div>

    )
}