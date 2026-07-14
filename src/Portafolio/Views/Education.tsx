import { useEffect, useRef } from "react";
import { ListEducation, ListStacks } from "../Data/Constantes"

export const Education = () => {

  const stacks = [...ListStacks, ...ListStacks];
  const scrollRef = useRef<HTMLDivElement>(null);

  const moveCarousel = () => {
    const container = scrollRef.current;
    if(!container) return;
    container.scrollLeft += 1;

  }

  useEffect(() => {
    const interval = setInterval(()=> {moveCarousel();},30)
    return () => clearInterval(interval);
  },[])

  return (
    <section className='min-h-screen px-18 py-12 text-[#EAE7DF]'>
        <h1 className='font-Momo text-6xl mb-12'>Educación</h1>
        <div className="grid grid-cols-5 grid-rows-10 gap-4 h-160 overflow-hidden">
            <div 
            className="
            col-span-3 
            row-span-7 
            bg-cover 
            bg-center 
            rounded-3xl
            shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]
            flex
            flex-col
            justify-end
            pb-2
            pl-4
            "
            style={{ backgroundImage: "url('public/photoEdu01.jpeg')" }}
            >
                <h5 className="font-Momo text-[#F4E8C5]">{ListEducation.main.time}</h5>
                <h2 className="font-League text-5xl text-[#F4E8C5]">{ListEducation.main.course}</h2>
                <p className="font-Darker text-2xl">{ListEducation.main.school}</p>
            </div>
            <div className="col-span-2 row-span-7 col-start-4 flex flex-col gap-4">
              <div className="w-full h-10 flex items-center">
                <h3 className="font-Momo text-2xl">Cursos y Certificaciones</h3>
              </div>
              <div className="w-full h-100 p-2 flex overflow-y-auto no-scrollbar">
                <div className="w-full h-full flex flex-col gap-2">
                  {ListEducation.others.map(item=>(
                    <div key={item.school} className="w-full h-26 p-2 shrink-0 grid grid-cols-10 grid-rows-2 gap-4">
                      {item.end === 'N' ? 
                      <div 
                      className="
                      col-span-2 row-span-3 
                      bg-center bg-cover rounded-2xl flex 
                      items-center justify-center
                      border-2 border-dashed 
                      border-[#81FB1D]"
                      >
                        <span className="font-Momo text-[#81FB1D]">{item.porcent}</span>
                      </div>
                      :
                      <div 
                      className="col-span-2 row-span-3 bg-center bg-cover rounded-2xl flex"
                      style={{ backgroundImage: "url('public/ShortImages/course01.jpg')" }}></div>
                      }
                      <div className="col-span-5 row-span-3 col-start-3 flex flex-col">
                        <p className="font-League  text-xl text-[#F4E8C5]">{item.school}</p>
                        <p className="font-Darker text-[14px]">{item.description}</p>
                        <p className="font-Momo text-[#F4E8C5]">{item.time}</p>
                      </div>
                      <div className="col-span-3 col-start-8 row-start-2">
                        {item.end === 'N' ? 
                        <></>
                        :
                        <button className="text-[#F0FB1D] text-sm w-full h-8 border border-[#F0FB1D] rounded-xl cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
                          Ver Certificado
                        </button>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-5 row-span-3 row-start-8 p-2">
              <h3 className="font-Momo text-2xl">Herramientas de desarrollo, diseño y gestión</h3>
              <div className="w-full p-4 flex overflow-x-auto no-scrollbar" ref={scrollRef}>
                <div className="flex flex-row gap-6 w-max">
                  {stacks.map((item,index)=>(
                    <div key={`${item.name} - ${index}`} className="w-25 h-25 bg-[#242421] rounded-2xl flex flex-col justify-center items-center">
                      <img className="w-10 h-10" src={`${item.icon}`}/>
                      <span className="font-Darker text-xl">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
