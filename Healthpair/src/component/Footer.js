import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
export default function Footer () {
    return (
        <div className={styles.Footer}>
            <Link className={styles.footitem} to="/">메이트 찾기</Link>
            <Link className={styles.footitem} to="/mento">멘토 멘티</Link>
            <Link className={styles.footitem} to="/profile">프로필 관리</Link>
            <Link className={styles.footitem} to="/config">환경 설정</Link>
        </div>
    );
}