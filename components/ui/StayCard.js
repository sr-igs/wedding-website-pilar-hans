import styles from "./StayCard.module.css";
import { motion } from "framer-motion";

function StayCard(props){
    return(
        <motion.div className={styles.mainDiv} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
            <h3 className={styles.mainTitle}>{props.title}</h3>
            <div className={styles.card}>
                {props.children}
            </div>
        </motion.div>
    )
}

export default StayCard