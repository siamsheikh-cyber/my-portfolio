import { BiSolidPhoneCall } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"
import { LuMapPin } from "react-icons/lu"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { motion } from "framer-motion";

function RightContact() {
    return <>
        <div className="md:w-[50%] flex items-start">
            <div className=" md:pl-20 md:pt-30">
                <motion.div
                    className="flex gap-5 mb-7 items-center"
                    initial={{ y: -50, opacity: 0 }}       // Top থেকে start
                    whileInView={{ y: 0, opacity: 1 }}     // Normal position
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <a href="mailto:siamthecoder@gmail.com">
                        <MdOutlineAlternateEmail className="bg-gray-500 cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    </a>
                    <p className="text-1xl">siamthecoder@gmail.com</p>
                </motion.div>
                <motion.div
                    className="flex gap-5 mb-7 items-center"
                    initial={{ x: -100, opacity: 0 }}       // Left থেকে start
                    whileInView={{ x: 0, opacity: 1 }}      // Normal position
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <a href="tel:+8801339539820">
                        <BiSolidPhoneCall className="bg-gray-500 cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    </a>
                    <h1 className="text-1xl custom-font">+8801339539820</h1>
                </motion.div>
                <motion.div
                    className="flex gap-5 items-center"
                    initial={{ y: 50, opacity: 0 }}        // Bottom থেকে start
                    whileInView={{ y: 0, opacity: 1 }}     // Normal position
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <a href="https://maps.app.goo.gl/DKuEnmvjG9r1ixTX9?g_st=ac">
                        <LuMapPin className="bg-gray-500 cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    </a>
                    <p className="text-1xl">DHAKA, BANGLADESH</p>
                </motion.div>
                <div className="flex flex-wrap gap-10 mt-13">
                    <a href="https://github.com/siamsheikh-cyber">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}       // Top থেকে start
                            whileInView={{ y: 0, opacity: 1 }}     // Normal position
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <FaGithub className="bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                        </motion.div>
                    </a>
                    <a href="https://www.linkedin.com/in/ss-aa-98916737b/">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}       // Left থেকে start
                            whileInView={{ x: 0, opacity: 1 }}      // Normal position
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <IoLogoLinkedin className="bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                        </motion.div>
                    </a>
                    <a href="https://www.facebook.com/share/1FbG5cs9xn/">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}        // Bottom থেকে start
                            whileInView={{ y: 0, opacity: 1 }}     // Normal position
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <TiSocialFacebookCircular className="bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                        </motion.div>
                    </a>
                    <a href="https://www.instagram.com/sheikhsiam36/">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}       // Left থেকে start
                            whileInView={{ x: 0, opacity: 1 }}      // Normal position
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <FaSquareInstagram className="hidden sm:block md:hidden lg:block bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                        </motion.div>
                    </a>
                </div>
            </div>
            <div>
                <motion.button
                    className="hidden sm:block font-bold border borderAnimation px-3 py-2 [writing-mode:vertical-rl] text-center relative"
                    initial={{ x: -120, opacity: 0 }}       // Left থেকে start
                    whileInView={{ x: 0, opacity: 1 }}      // Normal position
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    CONTACT
                    <span className="absolute top-[102px] right-[17px] bg-white w-[1px] h-20 animated-line"></span>
                </motion.button>
            </div>

        </div>
    </>
}

export default RightContact