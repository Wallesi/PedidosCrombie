"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getEatablesById } from "./getEatablesById";
import { parseCookies } from "nookies";

type Eatable = {
    idEatable: string;
    title: string;
    description: string;
    photo: string;
    price: number;
    name: string;
    menuType: string;
  };

export default function () {

  const cookies = parseCookies();
  const nombreRestaurante = cookies.localName;
  const id = useParams().id;
  const [eatables, setEatables] = useState<Eatable[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eatable = await getEatablesById(id.toString());
        setEatables(eatable);
      } catch (error: any) {
        console.error("Error al obtener la dirección:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-w-screen-lg pl-10 pr-10">
      <div className="border rounded-lg shadow-md">
        <div
          className="hero h-40 bg-base-200"
          style={{ backgroundImage: 'url(/Home/chef.jpg)' }}
        ></div>
        <div className="flex items-center justify-between p-4">
          <div className="flex gap-2">
            <img
              src="/UserLanding/restaurant.svg"
              className="w-1/12 border rounded-full p-1"
              alt=""
            />
            <div>
              <h1>{nombreRestaurante}</h1>
              <p>Descuento 20%</p>
              <p>15-20min - Envío $500</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img src="/UserLanding/star.svg" className="w-8" alt="" />
            <p className="text-lg">4</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5 mb-5">
        {!eatables ? (
          <div>cargando platos</div>
        ) : (
          eatables.map((eatable) => (
            <div
              key={eatable.idEatable}
              className="p-2 border rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <img src={`${eatable.photo}`} className="w-16" alt="" />
                <div>
                  <h1>{eatable.name}</h1>
                  <p>${eatable.price}</p>
                  <p>{eatable.menuType}</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
