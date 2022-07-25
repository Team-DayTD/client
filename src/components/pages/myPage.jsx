import React from 'react';
import { useState } from 'react';
import styles from './myPage.module.css';

const MyPage = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [tel, setTel] = useState('010-0000-0000');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setConfirmPasswordError] = useState(false);
  const [telError, setTelError] = useState(false);
  
  const onChangeEmail = (e) => {
      const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
      else setEmailError(true);
      setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
      const passwordRegex =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
      else setPasswordError(true);

      if (!passwordConfirm || e.target.value === passwordConfirm) setConfirmPasswordError(false);
      else setConfirmPasswordError(true);
      setPassword(e.target.value);
  };
  const onChangeConfirmPassword = ((e) => {
      if (password === e.target.value) setConfirmPasswordError(false);
      else setConfirmPasswordError(true);
      setConfirmPassword(e.target.value);
  });

  const onChangeTel = (e)=>{
      const telRegex = /^\\d{2,3}[-]\\d{3,4}[-]\\d{4}$/;
      if (!e.target.value || telRegex.test(e.target.value)) setTelError(false);
      else setTelError(true);
      setTel(e.target.value);
  };

  const validation = () => {
      if(!email) setEmailError(true);
      if(!password) setPasswordError(true);
      if(!passwordConfirm) setConfirmPasswordError(true);
      if(!tel) setTelError(true);

      if(password && passwordConfirm && email && tel) return true;
      else return false;
  }
  const onSave = (e) => {
      if(!validation()){
          alert('빈칸을 채워주세요');
      }
      else{}
      // call API
  }
  return (
    <div className={styles.container}>
    <h2 className={styles.title}>❤️마이페이지❤️</h2>
    <section className={styles.optContainer}>
            <h2 className={styles.title}>기본 설정</h2>
            <div className={styles.optBox}>
            
            <h3 className={styles.subTitle}>이름</h3>
            <div className={`${styles.output}`}>example</div>

            <h3 className={styles.subTitle}>이메일</h3>
            {emailError && <div class={styles.invalidInput}>이메일 형식이 맞지 않습니다.</div>}
            <input type="text" name=""email id="email" maxlength="50" value={email}
            placeholder="Email" className={styles.input} onChange={onChangeEmail}/>

            <h3 className={`${styles.subTitle}`}>ID</h3>
            <div className={`${styles.output}`}>example</div>
            
            <h3 className={`${styles.subTitle}`}>Password 확인/변경</h3>
            {passwordError && <div class={styles.invalidInput}>최소 8자 이상, 영어와 숫자, 특수문자를 포함해주세요. </div>}
            <input type="password" id='password' maxlength="20" value={password}
            placeholder="비밀번호" className={styles.input} onChange={onChangePassword}/>
            {passwordConfirmError && <div class={styles.invalidInput}>비밀번호가 일치하지 않습니다.</div>}
            <input type="Password" name="password" id="passwordConfirm" maxlength="20" value={passwordConfirm}
            placeholder="비밀번호 재확인" className={styles.input} onChange={onChangeConfirmPassword}/>
            
            <h3 className={`${styles.subTitle}`}>성별</h3>
            <div className={`${styles.output}`}>여성</div>

            <h3 className={`${styles.subTitle}`}>생년월일</h3>
            <div className={`${styles.output}`}>2000-01-05</div>

            <div className={styles.btnBox}>
            <button className={`${styles.saveBtn} ${onSave? 'styles.btnAction' : 'styles.btnInaction'}`}
                onClick={onSave}>저장하기</button>                 
            </div>
            </div>
        </section>
  </div>
  );
};

export default MyPage;