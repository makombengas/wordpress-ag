import { aboutHeader, dataAbout } from "@/data/data"
import Image from "next/image"


const page = () => {
  return (
    <div className="">
        <div className="hero">
           <div className="relative ">       
           <Image   blurDataURL={'/images/headway_image.jpg'}  as="image" rel="preload" className="w-full h-[12rem] md:h-[24rem] object-cover " src="/images/headway_image.jpg" alt="logo" width={1000} height={1000} />
            <div className=" absolute z-10 bg-black/70 w-full flex justify-center items-center h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <hr className="md:w-5 border-b-2 border-[#D07553]" />
              <h1 className="p-4 mt-8 md:mt-0 [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-[#EEDDC6] z-40 text-2xl   md:text-3xl xl:text-5xl text-center font-bold">{aboutHeader.title} </h1>
              <hr className=" md:w-5 border-b-2 border-[#D07553]" />
            </div>
           </div>
        </div>
       <div className="flex flex-col gap-4 mx-auto max-w-[100rem]  px-4 py-8 md:py-16">
            <h1 className="text-center md:text-left font-bold text-[#D07553] [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)] text-2xl md:text-4xl">
            {aboutHeader.subtitle}
            </h1>
            <p className="text-sm loading-relaxed font-thin text-justify text-[#4D3D33] md:text-lg">
                {aboutHeader.content}
            </p>
            <div className="flex flex-col gap-4">
                {
                    dataAbout.map((item) => (
                        <div key={item.id}>
                            <h1 className="mb-2 text-center md:text-left font-bold  [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)] text-xl md:text-3xl">
                                {item.title}
                            </h1>
                            <p className="text-sm loading-relaxed font-thin text-center md:text-justify text-[#4D3D33] md:text-lg">
                                {item.content}
                            </p>
                            <div className="mt-4 flex justify-center md:justify-start items-center md:items-start flex-col gap-4">
                               {
                                   item.listTitles.map((item) => (
                                       <div key={item.id} className="flex justify-center md:justify-start items-center md:items-start flex-col gap-2  ">
                                           <h2 className="  text-center md:text-left font-bold   text-lg md:text-xl">
                                                 {item.title}
                                           </h2>
                                           <p className="    text-sm loading-relaxed font-thin text-center md:text-justify text-[#4D3D33] md:text-lg">
                                               {item.subtitle}
                                           </p>
                                           <ul className="list-[disc]  list-inside text-[#4D3D33] flex flex-col gap-2">
                                            {
                                                item.answerArray.map((item) => (
                                                   <li key={item.id} className=" text-center md:text-left  flex flex-col gap-2">
                                                       { item.title}     
                                                    </li>
                                                ))
                                            }
                                           </ul>
                                       </div>
                                   ))
                               }
                            </div>
                        </div>
                    ))
                }
            </div>
       </div>
    </div>
  )
}

export default page