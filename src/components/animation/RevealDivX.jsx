/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealDivX = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const variants = {
        hidden: { opacity: 0, x: -10 }, // Starts from -50px to move left
        visible: { opacity: 1, x: 0 }, // Ends at 0px, i.e., no horizontal movement
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
            className="reveal-div-x" // You can customize the class name
        >
            {children}
        </motion.div>
    );
};

export default RevealDivX;
