import { useState } from "react";
import { Link } from "react-scroll";

import { XCircleIcon, MenuAlt4Icon } from "@heroicons/react/outline";

import { navLinks } from "./../constants/navLinks";

export const MobileNavbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className="bg-nightBlue-500 w-100 fixed top-0 left-0 right-0 ">
            <nav>
                <div className="flex px-2 py-4 items-center justify-between">
                    <span className="cursor-pointer">
                        <Link to="App">
                            <img src="/images/logo.svg" alt="" loading="lazy" className="h-10" />
                        </Link>
                    </span>
                    {openNav ? (
                        <XCircleIcon className="h-10 cursor-pointer hover:text-auroraGreen-200" onClick={toggleNav} />
                    ) : (
                        <MenuAlt4Icon className="h-10 cursor-pointer hover:text-auroraGreen-200" onClick={toggleNav} />
                    )}
                </div>
                {openNav && (
                    <div className="h-screen">
                        <ul className="cursor-pointer">
                            {navLinks.map((link, index) => (
                                <li className="mb-4">
                                    <Link
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        activeClass="text-auroraGreen-200"
                                        className="p-2 hover:text-auroraGreen-200"
                                        onClick={() => setOpenNav(false)}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};
