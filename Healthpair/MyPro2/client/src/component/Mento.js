import styles from "./Mento.module.css"
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import { FiSearch } from "react-icons/fi";
export default function Mento() {

    let navigate = useNavigate();

    const goProfile = () => {
        navigate('/profile');
    };
    const goProfile2 = () => {
        navigate('/profile2');
    };

    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition : {duration : 0.6}}}
            exit={{}}>
            <div className={styles.mentolist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘토 백승혁</div>
                    <div className={styles.infolist2}>25, 서울시</div>
                    <div className={styles.infolist3}>운동 분야 : 바둑</div>
                </div>
                <div className={styles.search} onClick={goProfile}>
                    <FiSearch/>
                </div>
            </div>
            <div className={styles.mentylist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo2.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘티 로니콜먼</div>
                    <div className={styles.infolist2}>38, 텍사스</div>
                    <div className={styles.infolist3}>희망 분야 : 헬스</div>
                </div>
                <div className={styles.search} onClick={goProfile2}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentylist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo3.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘티 김계란</div>
                    <div className={styles.infolist2}>??, 서울시</div>
                    <div className={styles.infolist3}>희망 분야 : 탈모 치료</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentolist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo4.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘토 권지용</div>
                    <div className={styles.infolist2}>32, 고양시</div>
                    <div className={styles.infolist3}>운동 분야 : 힙합</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentolist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo5.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘토 제니</div>
                    <div className={styles.infolist2}>27, 서울시</div>
                    <div className={styles.infolist3}>운동 분야 : 댄스 스포츠</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentylist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo6.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘티 조이</div>
                    <div className={styles.infolist2}>29, 화천군</div>
                    <div className={styles.infolist3}>희망 분야 : 필라테스</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentolist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo7.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘토 이소룡</div>
                    <div className={styles.infolist2}>??, 상하이</div>
                    <div className={styles.infolist3}>운동 분야 : 절권도, 살수</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            <div className={styles.mentylist}>
                <div className={styles.pro}>
                    <img className={styles.proimg}src="photo8.jpg"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.infolist1}>멘티 김태희</div>
                    <div className={styles.infolist2}>42, 서울시</div>
                    <div className={styles.infolist3}>희망 분야 : 재활 운동</div>
                </div>
                <div className={styles.search}>
                <FiSearch/>
                </div>
            </div>
            
        </motion.div>

    );
}