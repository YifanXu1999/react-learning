import Image from "next/image";

export function CartItem({item}) {
    return (
        <div className="flex m-2 p-2 hover:bg-green-200 bg-gray-200">
            <Image className="h-24 w-24" src={item.src} alt=""></Image>
            <div className="flex flex-col space-y-2">
                <div className="font-bold">{item.title}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
            </div>
            <div>${item.price}</div>
        </div>
    )
}