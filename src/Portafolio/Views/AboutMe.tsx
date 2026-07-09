const AboutMe = () => {
  return (
    <section className="min-h-screen bg-[#141414] text-[#EAE7DF] px-18 py-12">
      {/* Título */}
      <h1 className="font-Momo text-6xl mb-12">Sobre Mí</h1>

      {/* Contenido */}
      <div className="grid grid-cols-[1fr_1.1fr_0.8fr] gap-10">
        {/* =================== COLUMNA IZQUIERDA =================== */}

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-10 font-Darker text-lg leading-8 text-[#B9B9B9]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets.
            </p>
          </div>
        </div>

        {/* =================== COLUMNA CENTRO =================== */}

        <div className="flex flex-col gap-6">
          {/* Habilidades */}

          <div className="bg-[#2A2926] rounded-3xl p-7">
            <h2 className="font-League text-4xl mb-5">Habilidades Blandas</h2>

            <ul className="list-disc pl-5 space-y-2 font-Darker text-[#B9B9B9]">
              <li>Trabajo en equipo</li>

              <li>Comunicación efectiva</li>

              <li>Resolución de problemas</li>

              <li>Aprendizaje continuo</li>
            </ul>
          </div>

          {/* Idiomas */}

          <div className="bg-[#2A2926] rounded-3xl p-7">
            <h2 className="font-League text-4xl mb-5">Idiomas</h2>

            <ul className="list-disc pl-5 space-y-2 font-Darker text-[#B9B9B9]">
              <li>Español (Nativo)</li>

              <li>Inglés (Intermedio)</li>
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h2 className="font-League text-4xl mb-6">Contacto</h2>

            <div className="flex gap-6 text-3xl">
              <span>0</span>

              <span>1</span>

              <span>2</span>

              <span>3</span>

              <span>4</span>
            </div>
          </div>
        </div>

        {/* =================== COLUMNA DERECHA =================== */}

        <div>
          <div className="bg-[#242421] rounded-3xl overflow-hidden">
            <img
              src="public/photo01.jpeg"
              alt="Perfil"
              className="w-full h-105 object-cover p-3 rounded-4xl"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg">Jaime Maldonado García</h3>

              <p className="text-sm text-[#B9B9B9] mt-2">
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
