import {Card} from "../Card";

export function NewArrivalSection ({items}) {
    return (
        <div className="flex-col flex-center mt-20">
            <div className=" bg-yellow-200 text-4xl font-extrabold">NEW ARRIVALS</div>
            <div className="mt-10 grid grid-cols-1 gap-y-24 gap-x-20 p-5 md:grid-cols-3 ">
                {items.map((item, index) => (
                    <Card item={item} key={index}></Card>
                ))}
            </div>
        </div>
    )
}