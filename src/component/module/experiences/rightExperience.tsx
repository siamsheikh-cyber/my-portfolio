import { FaUserGraduate } from "react-icons/fa"
import { motion } from "framer-motion";


function RightExperience() {
    return <>
        <div className="flex flex-col justify-center items-center ml-[7%] md:ml-[25%] lg:ml-0">
            <motion.div
                className="glow-border mb-7 py-7 px-5 sm:px-15"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h3 className="text-center text-[#1DD8AD]">(April 2025 - Present)</h3>

                <div className="flex items-center gap-7 mt-2.5">
                    <FaUserGraduate className="text-4xl text-[#8B5BF6]" />
                    <div>
                        <p className="text-2xl mb-3"> Front-End Developer & Student</p>
                        <span>Ahmad's IT Institute</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="glow-border py-7 px-5 sm:px-15"
                initial={{ y: -120, opacity: 0 }}      // Top theke start
                whileInView={{ y: 0, opacity: 1 }}     // Normal position e asbe
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h3 className="text-center text-[#1DD8AD]">(April 2025 - Present)</h3>

                <div className="flex items-center gap-7 mt-2.5">
                    <FaUserGraduate className="text-4xl text-[#8B5BF6]" />
                    <div>
                        <p className="text-2xl mb-3"> Front-End Developer & Student</p>
                        <span>Ahmad's IT Institute</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </>
}


export default RightExperience