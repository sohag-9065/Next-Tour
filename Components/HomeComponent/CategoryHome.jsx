const CategoryHome = () => {
  return (
    <div className="w-[1280px] mx-auto">
      <h1 className="text-4xl font-semibold mb-5">Booking items</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://cdn.risingbd.com/media/imgAll/2022August/en/Launch-2208160609.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Launch</h2>

            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ryanair.arp.750pix.jpg/640px-Ryanair.arp.750pix.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Airplane</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://www.seibuholdings.co.jp/assets/img/group/img_business_hotel_01_03.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Hotel</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Bus</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://i.ytimg.com/vi/KuDn-EWuZew/maxresdefault.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Train</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure><img className="w-full h-72" src="https://www.transpedianews.com/wp-content/uploads/2019/01/images8252-5c3d50364abc5.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl ">Private Transport</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white text-lg">Show All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;