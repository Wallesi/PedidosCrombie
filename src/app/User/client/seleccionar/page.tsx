"use client";
import { useEffect, useState } from "react";
import { getAddress } from "./getAddres";
import { getLocalByCity } from "./getLocalByCity";
import { parseCookies, setCookie } from "nookies";
import Link from "next/link";

type Menu = {
  idEatable: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  name: string;
  menuType: string;
};

type Address = {
  idAddress: string;
  country: string;
  state: string;
  CP: string;
  city: string;
  street: string;
  number: string;
  apartment: string;
};

type Local = {
  id: string;
  localName: string;
  description: string;
  type: string;
  menus: Menu[];
  address: Address;
};

export default function () {
  const cookies = parseCookies();
  const userId = cookies.userId;
  const token = cookies.token;

  const [validLocal, setValidLocal] = useState<Local[]>();

  const [nombreRestaurante, setNombreRestaurante] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAddress = await getAddress();
        const { country, state, city } = fetchedAddress.address;
        const fetchedCity = await getLocalByCity({ country, state, city });
        setValidLocal(fetchedCity);
      } catch (error: any) {
        console.error("Error al obtener la dirección:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNombreRestaurante(inputValue);
  };


  const handleSearch = async () => {};

  return (

    <div className="container mx-auto max-w-screen-lg pl-10 pr-10">
      <div className="flex justify-between items-center mt-5">
        <input
          type="text"
          placeholder="Nombre del restaurante"
          className="input input-bordered w-1/2"
          value={nombreRestaurante} //
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      <div className="grid grid-cols-3  md:grid-cols-6 gap-4 pt-5">
        <div className="md:col-span-1 bg-orange-400 rounded-xl p-2 hover:bg-indigo-500 duration-300">
          <button>
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/burguer.svg" className="w-1/2" alt="" />
              <h3 className="text-base font-bold text-white">Resturante</h3>
            </div>
          </button>
        </div>

        <div className="md:col-span-1 bg-green-500 rounded-xl p-2 hover:bg-indigo-500 duration-300">
          <a href="/User/seleccionar/shoplanding">
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/groceries.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Mercado
              </h3>
            </div>
          </a>
        </div>

        <div className="md:col-span-1 bg-yellow-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
          <a href="/User/seleccionar/shoplanding">
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/iceCream.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Helado
              </h3>
            </div>
          </a>
        </div>

        <div className="md:col-span-1 bg-green-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
          <a href="/User/seleccionar/shoplanding">
            <div className="flex flex-col items-center justify-center h-full">
              <img src="/UserLanding/drinks.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Bebidas
              </h3>
            </div>
          </a>
        </div>

        <div className="md:col-span-1 bg-red-500 mb-0 p-2 rounded-md hover:bg-indigo-500 duration-300">
          <a href="/User/seleccionar/shoplanding">
            <div className="flex flex-col items-center  justify-center">
              <img src="/UserLanding/bakery.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Panaderia
              </h3>
            </div>
          </a>
        </div>

        <div className="md:col-span-1 bg-purple-500 p-2 mb-0 text-center rounded-md hover:bg-indigo-500 duration-300">
          <a href="/User/seleccionar/shoplanding">
            <div className="flex flex-col items-center justify-center">
              <img src="/UserLanding/pharmacy.svg" className="w-1/2" alt="" />
              <h3 className="text-base md:text-xl font-bold text-white">
                Farmacia
              </h3>
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-4 mt-5 mb-5 ">
        {!validLocal ? (
          <div className="items-center mx-auto">
            <p className="text-3xl text-red-500">No se han encontrado locales en tu zona</p>
          </div>
        ) : (
          <>
            {validLocal.map((data) => (
              <button>
                <Link href={`/user/client/seleccionar/${data.id}`}>
                  <div
                    className="flex items-center justify-between border border-black rounded-xl p-4"
                    key={data.id}
                  >
                    <img
                      src="/UserLanding/restaurant.svg"
                      className="w-1/12 border rounded-full p-1"
                      alt=""
                    />
                    <div>
                      <h1>{data.localName}</h1>
                      <p>Descuento 20%</p>
                      <p>15-20min - Envio $500</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <img src="/UserLanding/star.svg" className="w-8" alt="" />
                      <p className="text-lg">4</p>
                    </div>
                  </div>
                </Link>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
