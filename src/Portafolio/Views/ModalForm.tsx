import { useEffect, useMemo, useState } from "react";
import { expDetalleModal } from "../Data/Constantes";
import type { Render } from "../Interfaces/Interface";

interface Props {
  onOpen: boolean;
  onClose: () => void;
  idRefer: number;
}

export const ModalForm = ({
  onOpen,
  onClose,
  idRefer,
}: Props) => {
  // Datos estáticos
  const data = useMemo(() => {
    return expDetalleModal.find((item) => item.id === idRefer);
  }, [idRefer]);

  // Solo las imágenes son estado
  const [images, setImages] = useState<Render[]>([]);

  // Cuando cambia el proyecto se actualizan las imágenes
  useEffect(() => {
    if (!data) {
      setImages([]);
      return;
    }

    setImages([...data.render]);
  }, [data]);

  const swapImages = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];

      const selected = index + 1;

      [newImages[0], newImages[selected]] = [
        newImages[selected],
        newImages[0],
      ];

      return newImages;
    });
  };

  if (!onOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-[#464645]/50 flex justify-center items-center z-50">
      <div className="w-120 h-180 md:w-5/6 md:max-w-7xl md:max-h-[90vh] p-4 rounded-[20px] bg-[#1C1C1B] overflow-y-auto no-scrollbar relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="flex flex-col md:grid md:grid-cols-8 md:grid-rows-6 md:h-full md:w-full gap-4">

          {/* Información */}
          <div className="col-span-5 row-span-4 col-start-4 text-white overflow-y-auto no-scrollbar">
            <h2 className="text-2xl md:text-4xl font-Momo mb-6 mt-10 md:mt-1">
              {data.title}
            </h2>

            {data.pagraph.map((item, index) => (
              <div key={index} className="mb-5">
                {item.subtitle && (
                  <h3 className="text-xl md:text-3xl font-League mb-2">
                    {item.subtitle}
                  </h3>
                )}

                <p className="font-Darker text-[15px] md:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Imagen principal */}
          <div className="col-span-3 row-span-6 col-start-1 row-start-1 rounded-3xl overflow-hidden">

            {images.length > 0 && (
              <img
                src={images[0].src}
                alt={images[0].id}
                className="w-full h-100 md:w-full md:h-full object-cover md:object-center rounded-2xl"
              />
            )}

          </div>

          {/* Galería */}
          <div className="col-span-5 row-span-2 col-start-4 row-start-5 flex flex-col gap-4">

            <span className="text-[#A4A497] font-Darker font-bold text-[14px] md:text-xl">
              Galería de imágenes...
            </span>

            <div className="flex gap-4 items-center">

              {images.slice(1).map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => swapImages(index)}
                  className="w-25 h-15 md:w-60 md:h-32 rounded-2xl overflow-hidden cursor-pointer transition hover:scale-105"
                >
                  <img
                    src={img.src}
                    alt={img.id}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};