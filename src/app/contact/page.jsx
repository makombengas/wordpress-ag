import { contactInfo } from '@/data/data'
import Image from 'next/image'
import { Suspense } from 'react'
import { FaInstagram, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className=''>
            <div className="hero">
                <div className="relative ">       
                <Image priority  as="image" rel="preload" className="w-full h-[12rem] md:h-[24rem] object-cover " src="/images/chen_mizrach.jpg" alt="logo" width={1000} height={1000} />
                    <div className=" absolute z-10 bg-black/70 w-full flex justify-center items-center h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <hr className="md:w-5 border-b-2 border-[#D07553]" />
                    <h1 className="p-4 mt-8 md:mt-0 [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] text-[#EEDDC6] z-40 text-2xl   md:text-3xl xl:text-5xl text-center font-bold">{"Kontakt"} </h1>
                    <hr className=" md:w-5 border-b-2 border-[#D07553]" />
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 place-content-center place-items-center  gap-4 mx-auto max-w-[100rem]  px-4 py-8 md:py-16">
               {
                  contactInfo.map(contact => (
                    <div key={contact.id} >
                    <h3 className='text-lg text-center  md:text-2xl font-bold'>{contact.title}</h3>
                    <p className="text-sm text-center loading-relaxed font-thin md:text-justify text-[#4D3D33] md:text-lg">{contact.content}</p>
                    <ul className='flex text-sm md:text-lg flex-col gap-4 justify-center items-center'>
                     {contact.details.email ? <li className='mt-2 flex justify-center items-center gap-2 flex-col' >E-Mail: <a  className='bg-[#D07553] md:text-2xl text-center  text-[#F3EEE2] hover:border-2 hover:border-[#D07553] transition-colors ease-linear duration-300  py-2 px-4 rounded-md hover:bg-[#F3EEE2] hover:text-[#D07553]' href="mailto:${contact.details.email}">Schreiben sie uns</a></li> : ""}
                      {contact.details.phone ? <li className='mt-2 flex flex-col justify-center items-center gap-2' >Telefon: 
                      <a className='bg-[#D07553] md:text-2xl text-center  text-[#F3EEE2] hover:border-2 hover:border-[#D07553] transition-colors ease-linear duration-300  py-2 px-4 rounded-md hover:bg-[#F3EEE2] hover:text-[#D07553]' href={`tel:${contact.details.phone}`	}>rufen Sie uns an</a>
                      </li> : ""}
                      <div className="flex gap-4 text-3xl mt-5 justify-center items-center">
                      {contact.details.youtube ? <li> <a href={`https://youtube.com/${contact.details.youtube}`} target="_blank"><FaYoutube /></a></li> : ""}
                      {contact.details.instagram ? <li><a href={`https://instagram.com/${contact.details.instagram}`} target="_blank"><FaInstagram /> </a></li> : ""}
                      </div>
                    </ul>
                    </div>
                  ))
               }

            </div>
    </div>
    </Suspense>
  )
}

export default ContactPage