import { AboutMeText, IconsButtons, IconsIntagram, ListLanguage, ListSoftSkills } from "../Data/Constantes";
import archivePDF from '../../assets/pdf/CV-Jaime-Mgarcia-Act-2026.pdf';
import photoPorfile from '../../assets/Banners/photo01.jpeg'

const AboutMe = () => {

  

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = archivePDF;
  link.download = "CV-Jaime-Mgarcia-Act-2026.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section className="min-h-screen text-[#EAE7DF] px-8 py-12">
      {/* Título */}
      <h1 className="
      font-Momo text-4xl mb-8
      ">Sobre Mí</h1>

      {/* Contenido */}
      <div className="
      grid gap-10 grid-cols-1
      lg:grid-cols-[1fr_1.1fr_0.8fr] ">
        {/* =================== COLUMNA IZQUIERDA =================== */}

        <div className="flex flex-col justify-between">
          <div className="
          flex flex-col gap-4 font-Darker text-lg leading-7 text-[#B9B9B9] text-[16px]">
            {AboutMeText.map(item=>(
              <p key={item.name}>{item.text}</p>
            ))}
          </div>
        </div>

        {/* =================== COLUMNA CENTRO =================== */}

        <div className="flex flex-col gap-6">
          {/* Habilidades */}

          <div className="
          bg-[#2A2926] rounded-2xl p-5 text-[#F4E8C5]
          ">
            <h2 className="
            font-League text-2xl mb-2
            ">
              Habilidades Blandas
            </h2>
            <ul className="list-disc pl-5 space-y-2 font-Darker text-[#B9B9B9] text-[16px]">
              {ListSoftSkills.map(item=>(
                <li key={item.name}>{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Idiomas */}

          <div className="bg-[#2A2926] rounded-2xl p-5 text-[#F4E8C5]">
            <h2 className="font-League text-2xl mb-2">Idiomas</h2>
            <ul className="list-disc pl-5 space-y-2 font-Darker text-[#B9B9B9] text-[16px]">
              {ListLanguage.map(item=>(
                <li key={item.name}>{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h2 className="
            font-League text-2xl mb-6 text-[#F4E8C5]
            ">Contacto & Redes Sociales</h2>

						<div className="flex gap-12">
							{IconsButtons.map(item=>(
                <div className="relative group transition-transform">
                  <a 
                  key={item.name} 
                  onClick={
                    item.name !== 'Curriculum' ? () => window.open(item.url, "_blank") : downloadPDF
                  }
                  >
                    <item.icon className="w-8 h-8 text-amber-50 cursor-pointer hover:scale-140 transition-transform" />
                  </a>
                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    mt-4
                    px-2
                    py-1
                    rounded-2xl
                    bg-[#65A106]
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                >
                  {item.tooltip}
                </span>
                </div>                
              ))}
						</div>
          </div>
        </div>

        {/* =================== COLUMNA DERECHA =================== */}

        <div>
          <div className="bg-[#242421] rounded-3xl overflow-hidden">
            <img
              src={photoPorfile}
              alt="Perfil"
              className="w-full h-105 object-cover p-3 rounded-4xl"
            />
            <div className="pl-4 pb-4">
              <div className="flex flex-row gap-3">
                {IconsIntagram.map(item => (
                  <item.icon className={'w-7 h-7 text-amber-50'}/>
                ))}
              </div>
              
              <h3 className="font-Darker font-bold text-lg text-[#F4E8C5]">Jaime Maldonado García</h3>
              <p className="font-Darker text-sm text-[#B9B9B9]">
                Soy un apasionado por el desarrollo y el diseño.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
