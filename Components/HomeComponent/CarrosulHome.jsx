const CarrosulHome = () => {
    return (
        <div className="max-w-[1140px] mx-auto py-10">
            <div className="w-full shadow-lg carousel h-96 shadow-blue-500/20">
                <div id="slide1" className="relative w-full carousel-item">
                    <img
                        src="https://media.istockphoto.com/id/1163498940/photo/interior-of-a-modern-luxury-hotel-double-bed-bedroom.jpg?s=612x612&w=0&k=20&c=75KFjgY3RHrQq2yTV4boA4A89qMeccMQZotFKIMURS8="
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide4"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img
                        src="https://images.all-free-download.com/images/graphiclarge/hotel_room_stock_photo_515821.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide1"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide2"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide4"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img
                        src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide3"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            className="bg-blue-500 border-0 btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarrosulHome;
