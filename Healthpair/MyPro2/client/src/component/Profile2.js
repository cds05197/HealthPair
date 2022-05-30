import styles from "./Profile.module.css"
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";


export default function Profile() {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
        <motion.div className={styles.profile}
        initial={{opacity:0}}
        animate={{opacity:1, transition : {duration : 0.6}}}
        exit={{}}>
            <button className={styles.btn} onClick={goBack}>
                X
                </button>
            <img className={styles.proimg} src="./Photo2.jpg"></img>
            <div className={styles.name2}>
                로니콜먼
            </div>
            <div className={styles.info2}>
                38, 미국 텍사스
            </div>
                <div className={styles.cate1}>관심 종목 : </div>
                <div className={styles.cate}>
                <div className={styles.cate2}>헬스</div>
                <div className={styles.cate2}>조깅</div>
                <div className={styles.cate2}>범인검거</div>
                </div>
            
            <button className={styles.mate}>
                메이트 신청</button>
            <button className={styles.chatt}>채팅하기</button>
            <div className={styles.intro}> 소개글 </div>
            <div className={styles.introduce}>
                안녕하세요 로니콜먼입니다.
                미스터 올림피아 8관왕 입니다.
                3대 운동은 벤치프레스 340kg,
                스쿼트 380kg, 데드리프트 360kg
                입니다. 이상입니다.
                
            </div>
        </motion.div>
        </>
    );
}