const CategoryHome = () => {
    return (
        <div className="w-[1140px] mx-auto">
            <h1 className="mb-5 text-3xl font-bold text-blue-500 mt-14">
                Booking Items
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/20 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://cdn.risingbd.com/media/imgAll/2022August/en/Launch-2208160609.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-2xl text-blue-500 card-title">
                            Launch
                        </h2>

                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/15 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ryanair.arp.750pix.jpg/640px-Ryanair.arp.750pix.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-2xl text-blue-500 card-title">
                            Airplane
                        </h2>
                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/15 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://www.seibuholdings.co.jp/assets/img/group/img_business_hotel_01_03.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-2xl text-blue-500 card-title">
                            Hotel
                        </h2>
                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/15 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-2xl text-blue-500 card-title">
                            Bus
                        </h2>
                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/15 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://i.ytimg.com/vi/KuDn-EWuZew/maxresdefault.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-2xl text-blue-500 card-title">
                            Train
                        </h2>
                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-500 rounded-none shadow-lg shadow-blue-500/15 card bg-blue-50/50">
                    <figure>
                        <img
                            className="w-full h-72"
                            src="https://www.transpedianews.com/wp-content/uploads/2019/01/images8252-5c3d50364abc5.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="p-5 card-body">
                        <h2 className="text-3xl card-title ">
                            Private Transport
                        </h2>
                        <div className="justify-start card-actions">
                            <button className="px-5 py-2 font-semibold text-white bg-blue-500">
                                Show All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryHome;
