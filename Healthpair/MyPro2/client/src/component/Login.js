import styles from "./Login.module.css"
import {useState} from 'react';
import {Navigate} from 'react-router-dom';

export default function Login() {
    var [info, setInfo] = useState({
        response: ''
    });

    var [inputs, setInputs] = useState({
        userId: '',
        userPwd: ''
    });
    

    function onChange(e) {
        const { value, id } = e.target;
        
        setInputs({
            ...inputs,
            [id]: value
        })

        console.log(inputs.userId+"///"+inputs.userPwd);
    }

    async function validationChk(e) {
        // var inId = document.getElementById('userId').value;
        // var inPwd = document.getElementById('userPwd').value;

        setInfo({
            ...info,
            id: inputs.userId,
            pwd: inputs.userPwd
        });
        
        var response = await fetch('/Login/validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        });

        var body = await response.text();
        
        console.log(body);

        setInfo({
            ...info,
            response: JSON.parse(body)
        });

        console.log(info.response.validation);
        if (!(info.response.validation)) alert('아이디 혹은 비밀번호 오류입니다.');
    }

    if (info.response.validation) {
        return (
            <Navigate replace to="/" />
        );
    } else {
        return(
            <div>
                <div className={styles.login}>
                    
                    <input type="id" id="userId" className={styles.id} placeholder="아이디" onChange={onChange} />
                    <input type="password" id="userPwd" className={styles.pass} placeholder="비밀번호" onChange={onChange} />
                    <div className={styles.sub}>
                        비밀번호찾기
                    </div>
                    <button className={styles.logbtn} onClick={validationChk}>
                        로그인
                    </button>
                    <button className={styles.signbtn}>
                        회원가입
                    </button>
                </div>
            </div>
        );
    }
}