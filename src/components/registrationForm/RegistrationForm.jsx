import { formFields } from '@/data/data'


const RegistrationForm = () => {
  return (
    <div className="  ">
    <div className="">
    <Image as="image" rel='preload' className='w-full h-[12rem] object-cover ' src={"/images/alex-kotliarskyi.jpg"} alt="logo" width={1000} height={1000} />
    </div>
     {
      formFields.map(item =>(
          <div key={item.id}>
              <form action="">
                  <div className="flex flex-col  gap-2">
                      
                      {
                          item.id === 3  ? (
                             <div className="mt-5 flex gap-4">
                              <label htmlFor={item.name}>{item.label}</label>
                                <input className='w-auto' type={item.type} name={item.name} placeholder={`${item.placeholder}  ${item.required ? "(Pflichtfeld)" : "optional"}  `}  id={item.name} />
                             </div>
                          ) : (
                             <div className="flex flex-col gap-2 ">
                              <label className='pt-2' htmlFor={item.name}>{item.label}</label>
                                 <input   className='w-auto py-1 px-2' placeholder={`${item.placeholder}  ${item.required ? "(Pflichtfeld)" : "optional"}  `} type={item.type} name={item.name} id={item.name} />
                                
                             </div>
                          )
                      }
                  </div>
              </form>
          </div>
      ))
  }
  <button className="mt-5 float-right bg-[#4D3D33] hover:bg-[#4D3D33]/80 text-md md:text-xl rounded-md text-white p-2">Email senden</button>
  </div>
  )
}

export default RegistrationForm