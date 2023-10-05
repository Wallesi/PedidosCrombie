export default function () {


    return (
        <div className="">
            <div className="flex flex-col-reverse sm:flex-row">
                <div className="w-full relative">
                    <img src="Home/Portada.jpg" alt="Tu imagen" className="w-screen h-screen" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                        <p className="text-4xl font-semibold text-center">¡Disfruta de deliciosas comidas!</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-10 ">
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 pr-3 pl-3">
                    <div className="flex flex-col items-center flex-1">
                        <div className="p-4 border rounded-md h-full">
                            <img className="w-full h-3/4 max-w-xs lg:max-w-full" src="/home/cliente.jpg" alt="Persona usando móvil" />
                            <h5 className="text-lg font-medium text-center mt-3">Cliente</h5>
                            <div className="flex justify-center mt-2">
                                <button className="bg-violet-700 pl-16 pr-16 border rounded-full p-2 text-white">Register</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <div className="p-4 border rounded-md h-full">
                            <img className="w-full h-3/4 max-w-xs lg:max-w-full" src="/home/DeliveryMan.png" alt="Repartidor" />
                            <h5 className="text-lg font-medium text-center mt-3">Repartidor</h5>
                            <div className="flex justify-center mt-3">
                                <button className="bg-violet-700 pl-16 pr-16 border rounded-full p-2 text-white">Register</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <div className="p-4 border rounded-md h-full">
                            <img className="w-full h-3/4 max-w-xs lg:max-w-full" src="/home/chef.jpg" alt="Persona picando verdura" />
                            <h5 className="text-lg font-medium text-center mt-3">Restaurante</h5>
                            <div className="flex justify-center mt-3">
                                <button className="bg-violet-700 pl-16 pr-16 border rounded-full p-2 text-white">Register</button>
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
                            <h1 className="pb-2">Ampliación de la visibilidad</h1>
                            <h1 className="pb-2">Incremento en las ventas</h1>
                            <h1 className="pb-2">Marketing efectivo</h1>
                            <h1 className="pb-2">Gestión simplificada de pedidos</h1>
                            <h1 className="pb-2">Recopilación de datos y retroalimentación</h1>
                            <h1 className="pb-2">Flexibilidad y conveniencia para tus clientes</h1>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}