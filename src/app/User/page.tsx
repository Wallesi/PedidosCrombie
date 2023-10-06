export default function () {
    return (
        <div className="container mx-auto max-w-screen-2xl mt-20 pl-5 pr-5">

            <div className="grid grid-cols-3 grid-rows-6 gap-4">
                <div className="col-span-1 row-span-3 bg-blue-500 p-4">Restaurantes</div>
                <div className="col-span-2 bg-green-500 p-4">Almacen</div>
                <div className="row-span-2 bg-red-500 p-4">Bebidas</div>
                <div className="bg-yellow-500 p-4">Helado</div>
                <div className="row-span-1 bg-purple-500 p-4">Panaderia</div>
                <div className="col-span-3 bg-purple-500 p-4 text-center">Farmacia</div>
            </div>


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}