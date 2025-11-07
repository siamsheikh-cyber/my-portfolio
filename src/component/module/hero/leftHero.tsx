import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

export default function HeroText() {
    const texts = ["Web Developer", "Front-End Developer"];
    const [textIndex, setTextIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [forward, setForward] = useState(true);

    useEffect(() => {
        const currentText = texts[textIndex];
        const speed = forward ? 150 : 80;

        const timer = setTimeout(() => {
            if (forward) {
                setDisplay(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setForward(false);
                }
            } else {
                setDisplay(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setForward(true);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, forward, texts, textIndex]);

    return (
        <motion.section
            className="bg-[#0D1224] pt-0 sm:pt-9"
            initial={{ opacity: 0, x: -100 }} // শুরুতে left দিক থেকে
            whileInView={{ opacity: 1, x: 0 }} // viewport এ এলে visible
            transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
            viewport={{ once: true, amount: 0.3 }} // একবারই চলবে
        >
            <div className="text-[30px] leading-[46px] sm:text-[40px] sm:leading-[56px] font-bold text-white">
                <h1>Hello,</h1>
                <h1>
                    This is <span className="text-[#EC4899]">SIAM SHEIKH</span>,
                </h1>
                <h1>I'm a Professional</h1>

                <h1 className="text-[#16F2B3] text-[25px] md:text-[34px] lg:text-[40px]">
                    {display}
                    <span className="animate-pulse">_.</span>
                </h1>
            </div>

            {/* Social Links */}
            <motion.div
                className="flex items-center gap-5 mt-[25px]"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <a href="https://github.com/siamsheikh-cyber">
                    <FaGithub className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="https://www.linkedin.com/in/ss-aa-98916737b/">
                    <FaLinkedin className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="https://www.facebook.com/share/1FbG5cs9xn/">
                    <MdFacebook className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
                <a href="https://www.instagram.com/sheikhsiam36/">
                    <FaSquareInstagram className="cursor-pointer text-[30px] text-[#EC4899]" />
                </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
                className="flex gap-3.5 mt-15 md:mt-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <a href="https://wa.me/8801790829850?text=Hi%20Siam%2C%20I%27m%20interested%20in%20your%20work!">
                    <button className="flex gap-1.5 w-[130px] sm:w-fit items-center cursor-pointer uppercase px-6 py-3 border border-[#E8489C] rounded-lg text-white font-semibold 
            hover:border-[#E8489C]
            transition-all duration-300 transform hover:scale-x-105 origin-left">
                        Contact me <FaWhatsapp />
                    </button>
                </a>
                <button className="flex gap-1.5 w-[130px] sm:w-fit items-center cursor-pointer uppercase px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#863BE6] to-[#E8489C]
          hover:from-[#E8489C] hover:to-[#863BE6] 
          transition-all duration-300 transform hover:scale-x-105 origin-left">
                    Get Resume <IoMdDownload />
                </button>
            </motion.div>
        </motion.section>
    );
}
