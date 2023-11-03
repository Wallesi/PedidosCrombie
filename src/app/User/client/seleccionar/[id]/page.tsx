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
    <div className="container mx-auto max-w-screen-2xl pl-10 pr-10 m-28">

      <div className="grid grid-cols-3 gap-5">

        <div className="col-span-2">
          <div className="flex-column">
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
        </div>
        <div className="col-span-1">
          <div className="flex-col items-center justify-center border border-gray-200 rounded-xl p-4 shadow-2xl">

            <h1 className="text-center pb-2 text-2xl font-medium">Carrito</h1>
            <div className="flex-col items-center justify-between border rounded-xl p-3">
              <div className="flex items-center justify-center">
                <div className="pr-4">
                  <h3>x3</h3>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <img src="/UserLanding/burguer.svg" className="w-10" alt="" />
                  <div>
                    <h1>Hamburguesa completa</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-2 gap-3">
                <button className="p-2 rounded-lg bg-red-400 s">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSEu11UnIT2EUx/HPKxkixc4QyoIipFgpVjIkIcMCpSSJWMjCK0NYScpUsiCUWEjGKAsZdjJFMidbRcoQofN2/vV33f9Y713dezvP8z3POb/zezp089PRzftrBOiNhZiJCRiJP3iHh7iG8/hZK9F6gFk4kpvWO+grrMHNsqBagB3Yngve4yyu4FH+m4i5WIxh+W8T9hUhZYDK5l+wDJeyLGUJ9sAiHEdfbMCB6sAiILK6iG+YjKdNimAK7iKA03Cnsq4a0B8vMBjLcbrJzSthG7EfzzG+0vhqwFocxjOMq1OWWtxeqa5IcD4uRGA14CpCOesS1OIBusL3YAuOYXUR8AFDMQpv2tkdU3EbDzCpCPiaSgg1fE9ADFUzT6USg/ARnzCwCAhZRqMHIN7jaRUQaz/n+nj/pwfR/dGpgCfNpF0SE2W5n0IZWwScwVJsxt42AVuxC6ewoggI7Z/ES4zB7xYhPfEaw7EE54qAaG6UKQJW4kSLgPVpEzGsMWg/ioD4noHrbVhF2Mq9tIrpKdWu/MrMrhO7Uw1hdpfrnCS8J8oRg9UPcYpD1fG17Hobdmbg27TrmPTHCEsIK5mXTjok5RxOerCYTL0LZw6O5nTXa0dcOKtwqyyo0ZXZBwswOxs3IrMNtYTeb6Sp/aqVQSNAi0L6P7zbAX8BklhiGe9CH+wAAAAASUVORK5CYII=" />
                </button>
                <p className="text-lg">$1500</p>
                <button className="p-2 rounded-lg bg-green-400">
                  <img className="w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAf5JREFUSEu11UnojlEUx/HPXzJEip0hlAVFSLFSrGRIQoYFSkkSsZCFvwxhJSlTyYJQYiEZoyxk2MkUyZxsFSlDhE6dt15Pz/s8/v967+oZ7r3fc8/5nd/t0ObR0eb91QF6YyFmYgJG4g/e4SGu4Tx+tgq0CjALR3LTqoO+whrcLJvUCrAD23PBe5zFFTzKbxMxF4sxLL9twr4ipAzQ2PwLluFSpqUswB5YhOPoiw040DyxCIioLuIbJuPpf4pgCu4igNNwp7GuGdAfLzAYy3G6ZPMocIyyk2/EfjzH+EbhmyeuxWE8w7gWaakC9Ep1RYDzcaEYyVWEctYlqCw7VYCYvwdbcAyri4APGIpReNMi93WAqbiNB5hUBHxNJYQaviegsWFdrRupHoSP+ISBRUDIMgo9APEco6uAWPs518fzP2qI6o9OBTzpZooiLfdTKGOLgDNYis3Y203AVuzCKawoAkL7J/ESY/C7i33QE68xHEtwrgiI4kaaYsJKnOgiYH3aRDRrNNqPso6cgevdsIqwlXtpFdNTqi1bvhO7Uw1hdpcrNBreE+mIxuqHOMWhKrNr/NuGnfnyNu06Ov0xwhLCSualkw5JOYeTHiwGU3XhzMHR7O6qRosLZxVulU2quzL7YAFmZ+FGZLShltD7jTS1X60iqAPUWUTt/7YD/gL4NGoZiYUPsAAAAABJRU5ErkJggg==" />
                </button>
              </div>
            </div>

            <div className="flex-col items-center justify-between mt-8 border rounded-xl p-3">
              <div className="flex items-center justify-center">
                <div className="pr-4">
                  <h3>x3</h3>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <img src="/UserLanding/burguer.svg" className="w-10" alt="" />
                  <div>
                    <h1>Hamburguesa completa</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-2 gap-3">
                <button className="p-2 rounded-lg bg-red-400 s">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSEu11UnIT2EUx/HPKxkixc4QyoIipFgpVjIkIcMCpSSJWMjCK0NYScpUsiCUWEjGKAsZdjJFMidbRcoQofN2/vV33f9Y713dezvP8z3POb/zezp089PRzftrBOiNhZiJCRiJP3iHh7iG8/hZK9F6gFk4kpvWO+grrMHNsqBagB3Yngve4yyu4FH+m4i5WIxh+W8T9hUhZYDK5l+wDJeyLGUJ9sAiHEdfbMCB6sAiILK6iG+YjKdNimAK7iKA03Cnsq4a0B8vMBjLcbrJzSthG7EfzzG+0vhqwFocxjOMq1OWWtxeqa5IcD4uRGA14CpCOesS1OIBusL3YAuOYXUR8AFDMQpv2tkdU3EbDzCpCPiaSgg1fE9ADFUzT6USg/ARnzCwCAhZRqMHIN7jaRUQaz/n+nj/pwfR/dGpgCfNpF0SE2W5n0IZWwScwVJsxt42AVuxC6ewoggI7Z/ES4zB7xYhPfEaw7EE54qAaG6UKQJW4kSLgPVpEzGsMWg/ioD4noHrbVhF2Mq9tIrpKdWu/MrMrhO7Uw1hdpfrnCS8J8oRg9UPcYpD1fG17Hobdmbg27TrmPTHCEsIK5mXTjok5RxOerCYTL0LZw6O5nTXa0dcOKtwqyyo0ZXZBwswOxs3IrMNtYTeb6Sp/aqVQSNAi0L6P7zbAX8BklhiGe9CH+wAAAAASUVORK5CYII=" />
                </button>
                <p className="text-lg">$1500</p>
                <button className="p-2 rounded-lg bg-green-400">
                  <img className="w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAf5JREFUSEu11UnojlEUx/HPXzJEip0hlAVFSLFSrGRIQoYFSkkSsZCFvwxhJSlTyYJQYiEZoyxk2MkUyZxsFSlDhE6dt15Pz/s8/v967+oZ7r3fc8/5nd/t0ObR0eb91QF6YyFmYgJG4g/e4SGu4Tx+tgq0CjALR3LTqoO+whrcLJvUCrAD23PBe5zFFTzKbxMxF4sxLL9twr4ipAzQ2PwLluFSpqUswB5YhOPoiw040DyxCIioLuIbJuPpf4pgCu4igNNwp7GuGdAfLzAYy3G6ZPMocIyyk2/EfjzH+EbhmyeuxWE8w7gWaakC9Ep1RYDzcaEYyVWEctYlqCw7VYCYvwdbcAyri4APGIpReNMi93WAqbiNB5hUBHxNJYQaviegsWFdrRupHoSP+ISBRUDIMgo9APEco6uAWPs518fzP2qI6o9OBTzpZooiLfdTKGOLgDNYis3Y203AVuzCKawoAkL7J/ESY/C7i33QE68xHEtwrgiI4kaaYsJKnOgiYH3aRDRrNNqPso6cgevdsIqwlXtpFdNTqi1bvhO7Uw1hdpcrNBreE+mIxuqHOMWhKrNr/NuGnfnyNu06Ov0xwhLCSualkw5JOYeTHiwGU3XhzMHR7O6qRosLZxVulU2quzL7YAFmZ+FGZLShltD7jTS1X60iqAPUWUTt/7YD/gL4NGoZiYUPsAAAAABJRU5ErkJggg==" />
                </button>
              </div>
            </div>
                  
            <div className="flex-col items-center justify-between mt-8 border rounded-xl p-3">
              <div className="flex items-center justify-center">
                <div className="pr-4">
                  <h3>x3</h3>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <img src="/UserLanding/burguer.svg" className="w-10" alt="" />
                  <div>
                    <h1>Hamburguesa completa</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-2 gap-3">
                <button className="p-2 rounded-lg bg-red-400 s">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSEu11UnIT2EUx/HPKxkixc4QyoIipFgpVjIkIcMCpSSJWMjCK0NYScpUsiCUWEjGKAsZdjJFMidbRcoQofN2/vV33f9Y713dezvP8z3POb/zezp089PRzftrBOiNhZiJCRiJP3iHh7iG8/hZK9F6gFk4kpvWO+grrMHNsqBagB3Yngve4yyu4FH+m4i5WIxh+W8T9hUhZYDK5l+wDJeyLGUJ9sAiHEdfbMCB6sAiILK6iG+YjKdNimAK7iKA03Cnsq4a0B8vMBjLcbrJzSthG7EfzzG+0vhqwFocxjOMq1OWWtxeqa5IcD4uRGA14CpCOesS1OIBusL3YAuOYXUR8AFDMQpv2tkdU3EbDzCpCPiaSgg1fE9ADFUzT6USg/ARnzCwCAhZRqMHIN7jaRUQaz/n+nj/pwfR/dGpgCfNpF0SE2W5n0IZWwScwVJsxt42AVuxC6ewoggI7Z/ES4zB7xYhPfEaw7EE54qAaG6UKQJW4kSLgPVpEzGsMWg/ioD4noHrbVhF2Mq9tIrpKdWu/MrMrhO7Uw1hdpfrnCS8J8oRg9UPcYpD1fG17Hobdmbg27TrmPTHCEsIK5mXTjok5RxOerCYTL0LZw6O5nTXa0dcOKtwqyyo0ZXZBwswOxs3IrMNtYTeb6Sp/aqVQSNAi0L6P7zbAX8BklhiGe9CH+wAAAAASUVORK5CYII=" />
                </button>
                <p className="text-lg">$1500</p>
                <button className="p-2 rounded-lg bg-green-400">
                  <img className="w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAf5JREFUSEu11UnojlEUx/HPXzJEip0hlAVFSLFSrGRIQoYFSkkSsZCFvwxhJSlTyYJQYiEZoyxk2MkUyZxsFSlDhE6dt15Pz/s8/v967+oZ7r3fc8/5nd/t0ObR0eb91QF6YyFmYgJG4g/e4SGu4Tx+tgq0CjALR3LTqoO+whrcLJvUCrAD23PBe5zFFTzKbxMxF4sxLL9twr4ipAzQ2PwLluFSpqUswB5YhOPoiw040DyxCIioLuIbJuPpf4pgCu4igNNwp7GuGdAfLzAYy3G6ZPMocIyyk2/EfjzH+EbhmyeuxWE8w7gWaakC9Ep1RYDzcaEYyVWEctYlqCw7VYCYvwdbcAyri4APGIpReNMi93WAqbiNB5hUBHxNJYQaviegsWFdrRupHoSP+ISBRUDIMgo9APEco6uAWPs518fzP2qI6o9OBTzpZooiLfdTKGOLgDNYis3Y203AVuzCKawoAkL7J/ESY/C7i33QE68xHEtwrgiI4kaaYsJKnOgiYH3aRDRrNNqPso6cgevdsIqwlXtpFdNTqi1bvhO7Uw1hdpcrNBreE+mIxuqHOMWhKrNr/NuGnfnyNu06Ov0xwhLCSualkw5JOYeTHiwGU3XhzMHR7O6qRosLZxVulU2quzL7YAFmZ+FGZLShltD7jTS1X60iqAPUWUTt/7YD/gL4NGoZiYUPsAAAAABJRU5ErkJggg==" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-evenly mt-5">
              <button className="btn bg-red-600">Cancelar</button>
              <button className="btn bg-green-300">Confirmar </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
