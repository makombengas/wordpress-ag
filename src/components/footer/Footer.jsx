"use client"

import { dataNavigation } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Footer = () => {
    const pathname = usePathname()
  return (
    <div className="bg-[#4D3D33] py-8 ">
        <div className="mx-auto max-w-[100rem] flex-col  flex justify-between items-center px-4 py-1">
            <div className=" w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
                 <div className="flex-1  flex md:items-start justify-center md:justify-start items-center flex-col gap-4">
                    <Link className="" rel="preload" href="/"  >
                        <Image as="style" rel="preload" className={`transition-width ease-linear duration-300  w-[3rem] md:w-16   `} priority src="/images/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                    <p className="md:text-left text-center  text-[#F3EEE2]  max-w-[20rem] text-sm md:text-md">Die Wordpress AG „WordPress lernen“ ist ein spannendes und praxisorientiertes Angebot für Schüler ab der 7. Klasse</p>
                 </div>

                 <div className={`flex-4 text-[#F3EEE2]  flex-col text-2xl mt-5 md:mt-0 md:gap-4 text-[.875rem] md:text-[.875rem]   xl:text-md uppercase  md:flex-row flex items-center justify-end`} >
                    {
                        dataNavigation.map((item) => (
                            <Link  key={item.id} href={item.href} className={`${pathname === item.href ? "border-b-2 border-[#D07553] " : ""}   hover:text-[#F3EEE2]/60  mx-1 `	} >{item.name}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 border-t-[1px] border-[#F3EEE2] w-full">
            <p className="text-[#F3EEE2] text-center mt-5 text-sm md:text-md">© Copyright, WORDPRESS AG 2024 - Alle Rechte vorbehalten</p>
            </div>
        </div>
    </div>
  )
}

export default Footer