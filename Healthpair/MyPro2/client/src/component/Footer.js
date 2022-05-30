import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"
export default function Footer () {
    

    return (
        <ul className={styles.Footer}>
                <li>
                <NavLink  to="/" className={({ isActive }) => (isActive ? "selected" : "not")} >메이트 찾기</NavLink>
                </li>
                <li>
                <NavLink  to="/mento" className={({ isActive }) => (isActive ? "selected" : "not")}>멘토 멘티</NavLink>
                </li>
                <li>
                <NavLink  to="/Community" className={({ isActive }) => (isActive ? "selected" : "not")}>커뮤니티</NavLink>
                </li>
                <li>
                <NavLink  to="/config" className={({ isActive }) => (isActive ? "selected" : "not")}>환경 설정</NavLink>
                </li>
        
        </ul>
    );
}