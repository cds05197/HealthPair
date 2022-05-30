import styles from "./Header.module.css"
export default function Headers() {
    return (
        <>
        <div className={styles.Header}>   
            <img className={styles.dumb}
            src="/dumb.png"></img>
            <p className={styles.logo}>Health Pair</p>
        </div>
        </>
        
    );

}