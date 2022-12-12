import Link from 'next/link';
import ActiveLink from './ActiveLink';

const Header = () => {
    const menuItems = (
        <>
            <li className="">
                <ActiveLink href={'/home'}>Home</ActiveLink>
            </li>
            <li className="">
                <ActiveLink href={'/services'}>Services</ActiveLink>
            </li>
            <li className="">
                <ActiveLink href={'/blog'}>Blog</ActiveLink>
            </li>

            <li className="">
                <ActiveLink href={'/about'}>About</ActiveLink>
            </li>
        </>
    );
    return (
        <div className="py-2 bg-blue-500">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="p-2 mt-3 shadow menu menu-compact dropdown-content  bg-blue-500 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link href="/" className="text-3xl font-bold">
                        <span className="text-white">Next</span>{' '}
                        <span className="text-black">Tour</span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="p-0 menu menu-horizontal">{menuItems}</ul>
                </div>
            </div>
        </div>
    );
};
export default Header;
