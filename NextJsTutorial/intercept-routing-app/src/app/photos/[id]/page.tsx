import Image from "next/image";
import {photos} from "@/app/data";

export default async function Page({params}: {params: Promise<{id:string}>}) {
  const {id} = await params
  const photo = photos.find(item=> item.id ===id)!
  return (
    <div>
      <div className="container mx-auto pt-8 flex justify-center">
        <Image src={photo.src} alt={photo.alt} width={400} height={200} />
      </div>
      <div className="border-2 border-dashed rounded-lg p-3 mt-6">
        <p>
          <strong>Title: </strong> {photo.alt}
        </p>
        <p>
          <strong>Price: </strong> {photo.price}
        </p>
        <p>
          <strong>Price: </strong> What is Next.js?
          Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

          Whether youre an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
        </p>
      </div>
    </div>


  )
}