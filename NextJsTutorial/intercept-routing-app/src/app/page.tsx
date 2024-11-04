import {photos} from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {photos.map(photo=>
              <Link key={photo.id} href={`/photos/${photo.id}`} className="group">
                <div
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image src={photo.src}
                         width={200}
                         height={200}
                       alt={photo.alt}
                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{photo.alt.substring(0, 10)}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${photo.price}</p>
             </Link>)}


          </div>
        </div>
      </div>

    </div>
  );
}
