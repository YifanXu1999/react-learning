import HomePic from "@/public/home.png"
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero imgUrl={HomePic} altTxt="" content="Welcome to our website"></Hero>
  );
}
