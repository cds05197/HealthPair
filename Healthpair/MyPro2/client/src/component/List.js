import styles from "./List.module.css"
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
export default function List() {
    let navigate = useNavigate();

    const goProfile = () => {
        navigate('/profile');
    };
    const goProfile2 = () => {
        navigate('/profile2');
    };


    return (
<>
            <motion.div className={styles.Content}
            initial={{opacity:0}}
            animate={{opacity:1, transition : {duration : 0.6}}}
            exit={{}}
            >
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        백승혁
                    </div>
                    <div className={styles.add}>
                        서울시
                    </div> 
                    <div className={styles.cate}>
                    25
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile2}>
                    <img className={styles.proimg} src="/Photo2.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        로니콜먼
                    </div>
                    <div className={styles.add}>
                        텍사스
                    </div> 
                    <div className={styles.cate}>
                    38
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo3.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        김계란
                    </div>
                    <div className={styles.add}>
                        서울시
                    </div> 
                    <div className={styles.cate}>
                    ??
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo4.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        권지용
                    </div>
                    <div className={styles.add}>
                        고양시
                    </div> 
                    <div className={styles.cate}>
                    31
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo5.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        제니
                    </div>
                    <div className={styles.add}>
                        벤쿠버
                    </div> 
                    <div className={styles.cate}>
                    27
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo6.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        조이
                    </div>
                    <div className={styles.add}>
                        화천군
                    </div> 
                    <div className={styles.cate}>
                    29
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo7.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        이소룡
                    </div>
                    <div className={styles.add}>
                        상하이
                    </div> 
                    <div className={styles.cate}>
                    ??
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Photo8.jpg"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        김태희
                    </div>
                    <div className={styles.add}>
                        성남시
                    </div> 
                    <div className={styles.cate}>
                    43
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            <div className={styles.conitem} onClick={goProfile}>
                    <img className={styles.proimg} src="/Profile.png"/>
                <div className={styles.info}>
                     <div className={styles.name}>
                        사용자
                    </div>
                    <div className={styles.add}>
                        거주지
                    </div> 
                    <div className={styles.cate}>
                    나이
                    </div>
                </div>
            </div>
            
            
            </motion.div>

</>

    );
}