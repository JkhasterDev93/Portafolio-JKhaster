import { useState } from "react";
import { gridBoxExperience } from "../Data/Constantes"
import { ModalForm } from "./ModalForm";
import iconOpenModal from '../../assets/icons/right.png'

const Experience = () => {
    
    const [isShowModalForm, setIsShowModalForm] = useState<boolean>(false);
    const [idKey, setIdKey] = useState<number>(0);


  return (
    <>
    {<section className='h-100 md:min-h-screen text-[#EAE7DF] px-8 mb:py-12 mb-12 overflow-y-auto no-scrollbar'>
      <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-10 gap-4 h-full lg:h-screen">
        {gridBoxExperience.map(item=>(
          <div className={`group flex flex-col ${item.class} rounded-3xl p-3 md:p-4 bg-center bg-cover`} style={{backgroundImage:`url(${item.showImage === 'S' ? item.src : ''})`}}>
            {item.id === 1 ? <h1 className="font-Momo text-4xl md:text-6xl mb-12">Experiencia</h1> : <></>}
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="font-League text-2xl md:text-4xl">{item.bg}</h3>
                <p className="font-Darker text-[14px] md:text-xl">{item.company}</p>
              </div>
              <button className="
              w-10 h-10
              md:w-16 md:h-16
              p-2 
              bg-[#D1E395] 
              rounded-full 
              flex 
              justify-center 
              items-center
              lg:opacity-0
              scale
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover: scale-100
              cursor-pointer"
              onClick={()=> {setIsShowModalForm(true), setIdKey(item.id)}}>
                <img src={iconOpenModal}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>}
    {<ModalForm onOpen={isShowModalForm} onClose={()=>setIsShowModalForm(false)} idRefer={idKey}/>}
  </>
  )
}

export default Experience
