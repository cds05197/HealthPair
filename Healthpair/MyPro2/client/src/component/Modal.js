import React from 'react'
import styles from "./Modal.module.css";
function Modal({ closeModal })
{
    return(
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                <button onClick={() => {
                    closeModal(false)
                }}> X </button>
                </div>
                <div className={styles.title}>
                    <h1>메이트 신청 완료</h1>
                </div>
                <div className={styles.body}>
                    <p>
                        백승혁 님에게,<br></br>
                         메이트 신청을 전송하였습니다!
                    </p>                </div>
                <div className={styles.footer}>
                    <button onClick={() => {
                    closeModal(false)
                }} className={styles.button1}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;