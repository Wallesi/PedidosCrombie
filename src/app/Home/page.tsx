export default function () {


    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/Home/Portada.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Pedidos Crombie</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Unete</button>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-10 ">
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex flex-col items-center flex-1">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/Home/Cliente.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cliente</h2>
                                <p>Bla bla</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Registrate</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col items-center flex-1">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/Home/DeliveryMan.png" alt="Shoes" className="rounded-xl " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Repartidor</h2>
                                <p>Bla bla</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Registrate</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/Home/chef.jpg" alt="Shoes" className="rounded-xl h-fit" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Restarurante</h2>
                                <p>Bla bla</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Registrate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 pl-10 pr-10">
                <h1 className="text-center text-4xl font-medium">¿Porque trabajar con nosotros?</h1>

                <p className="text-center text-m mt-2 mb-2">En la actualidad, el sector gastronomico se ha vuelto más competitivo que nunca.
                    Para sobresalir en este mercado, los restaurantes necesitan adoptar estrategias innovadoras
                    que les permitan llegar a una audiencia más amplia y satisfacer las cambiantes demandas de los
                    consumidores. Una de las formas más efectivas de lograrlo es asociándose con una empresa de pedidos
                    en línea como "Pedidos Crombie". A continuación, exploramos las razones por las cuales esta colaboración puede
                    ser una decisión inteligente y las ventajas que ofrece para tu negocio:</p>

                <div className="flex flex-col lg:flex-row items-center justify-center">

                    <div className="w-full lg:w-1/2 flex mt-10">

                        <div className="w-1/2 lg:w-1/2">
                            <img src="/home/man.png" alt="" className="h-3/6" />
                        </div>

                        <div className="w-1/2 lg:w-1/2 text-center lg:text-left">
                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Ampliación de la visibilidad</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Ampliación de la visibilidad</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Incremento en las ventas</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Marketing efectivo</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Gestión simplificada de pedidos</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Recopilación de datos y retroalimentación</h1>
                            </div>

                            <div className="join gap-2">
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <h1 className="pb-2">Flexibilidad y conveniencia para tus clientes</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}