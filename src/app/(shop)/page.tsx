import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hola Mundo</h1>
        <h1 className={titleFont.className}>Hola Mundo</h1>
        <h1 className={`${titleFont.className} font-bold`}>Hola Mundo</h1>
      </div>
  );
}
