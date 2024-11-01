import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">

    {/* <img src="/logo.svg" alt="logo" className="h-10" /> */}
    <div>
        <Link href="/" >
            <span className={`${ titleFont.className} antialiased font-bold`}> Chamitos </span>
            <span> |  Shop</span>
        </Link>
    </div>

    {/* Center menu*/}
    <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombre</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kids">Niños</Link>
    </div>

    {/* Center menu*/}
    <div className="flex items-center">
        <Link href="/search" className="mx-2">
            <IoSearchOutline className="w5 h5"/>
        </Link>
        <Link href="/cart" className="mx-2">
            <div className="relative">
                <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -rigth-2 bg-blue-700 text-white">
                    3
                </span>
                <IoCartOutline className="w5 h5"/>   
            </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            Menu
        </button>
      
    </div>
    </nav>
  );
}