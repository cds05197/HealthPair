import styles from "./Community.module.css";
import { motion} from "framer-motion";
export default function Pro() {
    return (
        <motion.div className={styles.commu} initial={{opacity:0}}
        animate={{opacity:1, transition : {duration : 0.6}}}
            exit={{}}>
            미완성
        </motion.div>
    );
}