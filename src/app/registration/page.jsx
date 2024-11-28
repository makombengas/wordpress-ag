import { dataRegistration, formFields } from '@/data/data'
import Image from 'next/image'
import { Suspense } from 'react'


const RegistrationPage = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
            <div className=''>
                <div className="hero">
                <div className="relative ">       
                <Image  as="image" rel="preload" className="w-full h-[12rem] md:h-[24rem] object-cover  " src="/images/sam_balye.jpg" alt="logo" width={1000} height={1000} />
                    <div className=" absolute z-10 bg-black/70 w-full flex justify-center items-center h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <hr className="md:w-5 border-b-2 border-[#D07553]" />
                    <h1 className="p-4 mt-8 md:mt-0 [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-[#EEDDC6] z-40 text-2xl   md:text-3xl xl:text-5xl text-center font-bold">{"Anmeldung"} </h1>
                    <hr className=" md:w-5 border-b-2 border-[#D07553]" />
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-1 place-content-center place-items-center  gap-16 mx-auto max-w-[100rem]  px-4 py-8 md:py-16">
                    <div className="flex flex-col gap-4">
                          {
                              dataRegistration.map((item) => (
                                  <div className='flex flex-col gap-4 justify-center items-center' key={item.id}>
                                      <h1 className="mb-2 text-center md:text-left font-bold  [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)] text-xl md:text-3xl">
                                          {item.title}
                                      </h1>
                                      <p className="text-sm loading-relaxed font-thin text-center md:text-justify text-[#4D3D33] md:text-sm xl:text-lg">
                                          {item.content}
                                      </p>
                                  </div>
                              ))
                          }
                      </div>
              
               </div>
            </div>
      </Suspense>
  )
}

export default RegistrationPage