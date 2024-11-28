"use client"
import { dataNavigation } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const pathname = usePathname()
    const [bgNavbar, setBgNavbar] = useState(false)

    const handleBgNavbar = () => {
        if (window.scrollY >= 100) {
            setBgNavbar(true)
        } else {
            setBgNavbar(false)
        }
    }
    useEffect(() => {
     
        window.addEventListener("scroll", handleBgNavbar)
    }, [])
  return (
    <div className={` ${bgNavbar ? " shadow-2xl transition-colors ease-linear duration-300 bg-[#4D3D33] md:bg-[#F3EEE2] fixed top-0 left-0 right-0 z-50 " : "transition-colors ease-linear duration-300  bg-transparent text-[#4D3D33] md:text-[#F3EEE2]  fixed top-0 z-50 w-full "} `} >
        <div className="relative mx-auto max-w-[100rem]   flex justify-between items-center px-4 py-1 ">
            <Link className="z-50" rel="preload" href="/"  >
                <Image as="style" rel="preload" className={`${bgNavbar ? "transition-width ease-linear duration-300  w-[3rem] md:w-16  " : "transition-width ease-linear duration-300  w-16 md:w-24 "}  `} priority src="/images/logo.png" alt="logo" width={100} height={100} />
            </Link>
            <div className={`${openNavbar ? " transition-all ease-linear duration-300  bg-[#F3EEE2] h-screen md:h-auto  md:bg-transparent  absolute md:static md:w-auto top-[0%] left-[50%] translate-x-[-50%] md:translate-x-0  w-full   flex flex-col md:flex-row items-center justify-center  " : "hidden transition-bg ease-linear duration-300  uppercase md:flex items-center justify-end"}`} >
                <div className={`  flex-col text-2xl gap-4 md:text-[.875rem]   xl:text-lg uppercase  md:flex-row flex items-center justify-end`} >
                    {
                        dataNavigation.map((item) => (
                            <Link onClick={() => setOpenNavbar(false)}  key={item.id} href={item.href} className={`${pathname === item.href ? "border-b-2 border-[#D07553] " : ""}   hover:text-[#D07553]  mx-1 `	} >{item.name}</Link>
                        ))
                    }
                </div>
            </div>

            <div className="z-50 w-[1.75rem] relative flex flex-col gap-1.5  md:hidden" onClick={() => setOpenNavbar(!openNavbar)}  >
                <hr className={`${openNavbar ? " transition-rotate ease-linear duration-300 rotate-45  w-full border-[#4D3D33]" : "transition-rotate ease-linear duration-300  w-full border-[#ECDFCC]"} `} />
                <hr className={`${openNavbar ? "opacity-0  transition-opacity ease-linear duration-300 w-full border-[#4D3D33]" : "transition-opacity ease-linear duration-300  w-full border-[#ECDFCC]"} `} />
                <hr className={`${openNavbar ? "transition-rotate ease-linear duration-300 rotate-[-45deg] absolute  w-full border-[#4D3D33]" : "transition-rotate ease-linear duration-300 w-full border-[#ECDFCC]"} `} />
            </div>
        </div>
    </div>
  )
}

export default Navbar