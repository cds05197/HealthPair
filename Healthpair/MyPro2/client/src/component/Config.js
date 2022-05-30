import styles from "./Config.module.css";
import { motion} from "framer-motion";
export default function Config() {
    return (
        <motion.div className={styles.config} initial={{opacity:0}}
        animate={{opacity:1, transition : {duration : 0.6}}}
            exit={{}}>
            미완성
        </motion.div>

    );
}