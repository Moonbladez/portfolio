import { Link } from "react-scroll";

import { navLinks } from "./../constants/navLinks";

export const Navbar = () => {
    return (
        <>
            <div className="bg-nightBlue-500 bg-opacity-50 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 font-display z-10 py-2">
                <div className="flex container mx-auto justify-between h-20 items-center ">
                    <div>
                        <h1>
                            <img src="/images/logo.svg" alt="" loading="lazy" className="h-20" />
                        </h1>
                    </div>
                    <nav>
                        <ul className="flex">
                            {navLinks.map((link, index) => (
                                <li className="cursor-pointer mr-2 uppercase tracking-widest" key={index}>
                                    <Link
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        activeClass="text-white ring ring-auroraGreen-400 rounded"
                                        className="p-2 hover:text-auroraGreen-200"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
