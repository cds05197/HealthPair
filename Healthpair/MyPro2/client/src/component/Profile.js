import styles from "./Profile.module.css"
import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import Modal from "./Modal";


export default function Profile() {
    const [openModal, setOpenModal] = useState(false);
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
            <img className={styles.proimg} src="./Photo.jpg"></img>
            <div className={styles.name}>
                백승혁
            </div>
            <div className={styles.info}>
                26, 서울시 은평구
            </div>
                <div className={styles.cate1}>관심 종목 : </div>
                <div className={styles.cate}>
                <div className={styles.cate2}>헬스</div>
                <div className={styles.cate2}>조깅</div>
                </div>
            
            <button className={styles.mate}
            onClick={ () => {
                setOpenModal(true);
            }}
            >
                메이트 신청</button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            <button className={styles.chatt}>채팅하기</button>
            <div className={styles.intro}> 소개글 </div>
            <div className={styles.introduce}>
                안녕하세요 백승혁입니다.
                
            </div>
        </motion.div>
        </>
    );
}