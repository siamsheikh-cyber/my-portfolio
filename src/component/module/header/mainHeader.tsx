import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Mainheader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#0D1224] w-full">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="text-[25px] sm:text-[30px] text-[#16F2B3] font-bold cursor-pointer">
                        <a href="http://localhost:5174/" >

                            SIAM SHEIKH
                        </a>
                    </div>

                    {/* Hamburger Button for Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className={`absolute top-16 left-0 w-full bg-[#0D1224] md:static md:flex md:w-auto ${menuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-0">
                            <li>
                                <a href="#about" className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white uppercase font-bold text-[15px] hover:text-[#DB2777] transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}

export default Mainheader;
