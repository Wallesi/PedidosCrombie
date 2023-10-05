export const Footer = () => {
    return (
        <footer className="bg-violet-700 text-white pt-4">
            <div className="container mx-auto flex justify-center">
                <div className="w-full md:w-1/3 text-center">
                    <div className="flex flex-col items-center mb-4">
                            <h2 className="text-2xl font-semibold">Pedidos Crombie</h2>
                            <img className="w-1/3 max-w-xs h-auto" src="home/logotipo.png" alt="" />
                    </div>
                    
                </div>
                <div className="w-full md:w-1/3 text-center">
                    <h2 className="text-lg font-semibold mb-4">Registrate</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Añadir tu restraurante</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Crear cuenta usuario</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Registrate como repartidor</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 text-center">
                    <h2 className="text-lg font-semibold mb-4">Features</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blabla</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blabla</a></li>
                        <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blabla</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;