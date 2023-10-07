export default function () {
    return (
        <div className="container mx-auto max-w-screen-lg pl-10 pr-10">


            <div className="border rounded-lg shadow-md">
                <div className="hero h-40 bg-base-200" style={{ backgroundImage: 'url(/Home/chef.jpg)' }}>

                </div>
                <div className="flex items-center justify-between  p-4">
                    <div className="flex gap-2">
                        <img src="/UserLanding/restaurant.svg" className="w-1/12 border rounded-full p-1" alt="" />
                        <div>
                            <h1>Nombre Restaurante</h1>
                            <p>Descuento 20%</p>
                            <p>15-20min - Envio $500</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <img src="/UserLanding/star.svg" className="w-8" alt="" />
                        <p className="text-lg">4</p>
                    </div>
                </div>
            </div>

            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5" />

            <div className="grid grid-cols-3 gap-2 mt-5 mb-5">
                <div className="p-2 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/UserLanding/burguer.svg" className="w-16" alt="" />
                        <div>
                            <h1>Hamburguesa</h1>
                            <p>$1500</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/UserLanding/burguer.svg" className="w-16" alt="" />
                        <div>
                            <h1>Hamburguesa</h1>
                            <p>$1500</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/UserLanding/burguer.svg" className="w-16" alt="" />
                        <div>
                            <h1>Hamburguesa</h1>
                            <p>$1500</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>

        </div>
    )
}