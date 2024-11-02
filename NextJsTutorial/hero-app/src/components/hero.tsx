import Image, {StaticImageData} from "next/image";
import HomePic from "@/public/home.png"

interface IProps {
  imgUrl: StaticImageData,
  altTxt: string|undefined,
  content: string
}
export default function Hero(props: IProps) {
  const pic = props.imgUrl
  const altText = props.altTxt === undefined ? "" : props.altTxt
  const content = props.content
  return (
    <div className=' h-screen   '>
      <div className="absolute inset-0 -z-10">
        <Image src={pic} fill  style={{objectFit: 'cover'}} alt={altText}></Image>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300"> </div>
      </div>
      <div className="flex justify-center items-center h-2/5">
        <h1 className="md:text-4xl text-2xl font-bold">{content}</h1>
      </div>
    </div>
  );
}
