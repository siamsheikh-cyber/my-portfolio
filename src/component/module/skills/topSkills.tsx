import { motion } from "framer-motion";

function TopSkills() {
    return <>
        <motion.button
            className="borderAnimation font-bold border ml-[43%] bg-[#211B49] px-5 py-2 text-center relative"
            initial={{ y: 120, opacity: 0 }}       // Bottom থেকে start
            whileInView={{ y: 0, opacity: 1 }}     // Normal position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            Skills
            <span className="absolute top-[20px] right-20.5 bg-white w-22 sm:w-55 h-[1px] animated-line"></span>
            <span className="absolute top-[20px] left-20.5 bg-white w-22 sm:w-55 h-[1px] animated-line"></span>
        </motion.button>
    </>
}

export default TopSkills