import Link from "next/link";
import ActiveLink from "./ActiveLink";


const Header = () => {
    const menuItems = <>
        <li className='mr-2'>
            <ActiveLink href={"/home"}>Home</ActiveLink>
        </li>
        <li className='mr-2'>
            <ActiveLink href={"/services"}>Services</ActiveLink>
        </li>
        <li className='mr-2'>
            <ActiveLink href={"/blog"}>Blog</ActiveLink>
        </li>
        
        <li className='mr-2'>
            <ActiveLink href={"/about"}>about</ActiveLink>
        </li>

    </>
    return (
        <div className='bg-blue-500 py-4'>
            <div className="flex  justify-between  max-w-7xl mx-auto ">
                <div >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}

                        </ul>
                    </div>
                    <Link href="/" className="text-3xl font-bold"><span className="text-white">Next</span> <span className="text-black">Tour</span></Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}

                    </ul>
                </div>
            </div>
        </div>

    );
};
export default Header;