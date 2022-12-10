import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white my-20 pt-20">
      <div className="container px-6 pt-6 w-11/12 mx-auto pb-20">
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2">
          <div className="mb-6">
            <h2 className="uppercase text-3xl font-semibold mb-1">Next Tour</h2>
            <p className="text-center md:text-start">
              If you want the comforts of home while you’re halfway around the
              world, then next-tour is an excellent alternative to traditional
              Tour booking sites.
            </p>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">
              Explore
            </h5>
            <ul className="list-none mb-0 text-center md:text-start">
              <li>
                <Link href="/">
                  <p>Vacation Packages</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Hotels in United States</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Domestic Flights</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Car Rentals in United States</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">
              Policies
            </h5>

            <ul className="list-none mb-0 text-center md:text-start">
              <li>
                <Link href="/">
                  <p>Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Terms of Use</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Accessibility</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Personal Info Security</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="">
              <h6 className="text-2xl uppercase font-semibold mb-3 flex justify-center md:justify-start">
                Help
              </h6>
              <ul className="list-none mb-0 text-center md:text-start">
                <li>
                  <Link href="/">
                    <p>Support</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Cancel rental Booking</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Cancel your flight</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Refund timelines, policies & processes</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <span>&#169; 2022 </span>
        <Link hrefLang="/" className="text-white" href="#">
          All Right Reserved By Next Tour.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;