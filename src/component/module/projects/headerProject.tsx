import { motion } from "framer-motion";

function HeaderProject() {
    return <>
        <motion.button
            className="borderAnimation font-bold border bg-[#2a235a] px-5 py-2 text-center relative"
            initial={{ y: 120, opacity: 0 }}        // Bottom থেকে start
            whileInView={{ y: 0, opacity: 1 }}      // Normal position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            PROJECTS
            <span className="absolute top-[20px] left-30.5 bg-white w-[150px] sm:w-[430px] md:w-[580px] lg:w-[780px] h-[1px] animated-line"></span>
        </motion.button>
    </>
}

export default HeaderProject