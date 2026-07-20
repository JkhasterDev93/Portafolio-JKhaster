import { useEffect, useState } from "react";
import { expDetalleModal } from "../Data/Constantes";
import type { ExpDetail } from "../Interfaces/Interface";

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
  const [data, setData] = useState<ExpDetail>();

  useEffect(() => {
    if (!onOpen) return;

    const response = expDetalleModal.find((item) => item.id === idRefer);

    setData(response);
  }, [idRefer, onOpen]);

  const swapImages = (index: number) => {
    setData((prev) => {
      if (!prev) return prev;

      const newRender = [...prev.render];

      // +1 porque las miniaturas vienen de render.slice(1)
      const selected = index + 1;

      [newRender[0], newRender[selected]] = [
        newRender[selected],
        newRender[0],
      ];

      return {
        ...prev,
        render: newRender,
      };
    });
  };

  if (!onOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-[#464645]/50 flex justify-center items-center z-50">
      <div className="w-120 h-180  md:w-5/6 md:max-w-7xl md:max-h-[90vh] p-4 rounded-[20px] bg-[#1C1C1B] overflow-y-auto no-scrollbar relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="flex flex-col md:grid md:grid-cols-8 md:grid-rows-6 md:h-[80vh] md:w-full">

          <div className="col-span-5 row-span-4 col-start-4 text-white overflow-y-auto no-scrollbar">
            <h2 className="text-2xl md:text-4xl font-Momo mb-6 mt-10">
              {data.title}
            </h2>

            {data.pagraph.map((item, index) => (
              <div key={index} className="mb-5">
                {item.subtitle && (
                  <h3 className="text-xl mb:text-3xl font-League mb-2">
                    {item.subtitle}
                  </h3>
                )}

                <p className="font-Darker text-[15px] mb:text-xl">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="col-span-3 row-span-6 rounded-3xl overflow-y-auto no-scrollbar">
            <img
              src={data.render[0].src}
              alt={data.render[0].id}
              className="w-full h-60  md:w-full md:h-full object-cover"
            />
          </div>

          <div className="col-span-5 row-span-2 col-start-4 row-start-5 flex flex-col gap-4">
            <span className="text-[#A4A497] font-Darker font-bold text-[14px] md:text-xl">Galería de imagenes...</span>
            <div className="flex gap-4 items-center">
                {data.render.slice(1).map((img, index) => (
                <div
                    key={img.id}
                    onClick={() => swapImages(index)}
                    className="w-25 h-15 md:w-60 md:h-32 rounded-2xl overflow-hidden cursor-pointer transition hover:scale-105"
                >
                    <img
                    src={img.src}
                    alt={img.id}
                    className="w-full h-full object-cover"
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