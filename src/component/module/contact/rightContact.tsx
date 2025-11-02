import { BiSolidPhoneCall } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"
import { LuMapPin } from "react-icons/lu"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { TiSocialFacebookCircular } from "react-icons/ti"

function RightContact() {
    return <>
        <div className="lg:w-[50%] flex items-start">
            <div className=" lg:pl-20 pt-30">
                <div className="flex gap-5 mb-7 items-center ">
                    <MdOutlineAlternateEmail className="bg-gray-500  cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />

                    <p className="text-1xl">siamthecoder@gmail.com</p>
                </div>
                <div className="flex gap-5 mb-7 items-center ">
                    <BiSolidPhoneCall className="bg-gray-500  cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <h1 className="text-1xl">+8801339539820</h1>
                </div>
                <div className="flex gap-5 items-center ">
                    <LuMapPin className="bg-gray-500  cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <p className="text-1xl">DHAKA, BANGLADESH</p>
                </div>
                <div className="flex flex-wrap gap-10 mt-13">
                    <FaGithub className="bg-gray-500  cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <IoLogoLinkedin className="bg-gray-500  cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <FaSquareInstagram className="bg-gray-500  cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <TiSocialFacebookCircular className="hidden sm:block bg-gray-500  cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                </div>
            </div>
            <div>
                <button className="hidden sm:block font-bold border borderAnimation px-3 py-2 [writing-mode:vertical-rl] text-center relative ">
                    CONTACT <span className="absolute top-[102px] right-[17px] bg-white w-[1px] h-20 animated-line"></span>
                </button>
            </div>

        </div>
    </>
}

export default RightContact