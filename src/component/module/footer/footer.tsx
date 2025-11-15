import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.div
            className="bg-[#0D1224] px-8 py-8 text-white"
            initial={{ y: 50, opacity: 0 }}        // Bottom থেকে start
            whileInView={{ y: 0, opacity: 1 }}     // Normal position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <p>
                © Developer Portfolio <span className="text-[#0EB9A5]">Siam Sheikh</span>
            </p>
        </motion.div>
    );
}

export default Footer;
