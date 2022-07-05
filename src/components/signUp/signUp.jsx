import React, { useState } from 'react';
import styles from './signUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {

  const [id, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [name, setUserName] = useState("");
  const [nickname, setNickname] = useState("");

  const [idError, setUserIdError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setConfirmPasswordError] = useState(false);
  const [nameError, setUserNameError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);

  const onChangeUserId = (e) => {
      const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
      if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
      else setUserIdError(true);
      setUserId(e.target.value);
  };

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
  const onChangeConfirmPassword = (e) => {
      if (password === e.target.value) setConfirmPasswordError(false);
      else setConfirmPasswordError(true);
      setConfirmPassword(e.target.value);
  };
  const onChangeUserName = (e) => {
      setUserNameError(false);
      setUserName(e.target.value)
  };
  const onChangeNickname = (e) => {
    setNicknameError(false);
    setNickname(e.target.value)
};

  const validation = () => {
      if(!id) setUserIdError(true);
      if(!email) setEmailError(true);
      if(!password) setPasswordError(true);
      if(!passwordConfirm) setConfirmPasswordError(true);
      if(!name) setUserNameError(true);
      if(!nickname) setNicknameError(true);

      if(id && password && passwordConfirm && name && email && nickname) return true;
      else return false;
  }

  const onSubmit = (e) => {
      if(!validation()){
        alert('빈칸을 채워주세요');
      }
      else{}
      // call API
  }

    const now = new Date();
    let years = [];
    let month = [];
    let days = [];
    
    const [form, setForm] = useState({
        year: now.getYear() + 1,
        month: "01",
        day: "01",
    });

    let date = new Date(form.year, form.month, 0).getDate();
    
    for (let y = now.getFullYear(); y >= 1930; y -= 1) {
        years.push(y);
    }
    
    for (let m = 1; m <= 12; m += 1) {
        if (m < 10) {
            month.push("0" + m.toString());
        } else {month.push(m.toString());}
    }
    
    for (let d = 1; d <= date; d += 1) {
        if (d < 10) {
            days.push("0" + d.toString());
        } else {days.push(d.toString());}
    }

    const checkOnlyOne = (checkThis) => {
      const checkboxes = document.getElementsByName('gender')
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false
        }
      }
    }
    return (
        <div className={styles.container}>
            <section id="signUp" className={styles.signUpContainer}>
                <h1 className={styles.title}>회원 가입</h1>
                <div id="signUpId" className={styles.signUpBox}>
                    <label for='id'>아이디 <span className={styles.star}>*</span></label><br/>
                    <input type="text" name="id" id="id" maxlength="20" value={id}
                    placeholder="ID" className={styles.input} onChange={onChangeUserId}/>
                    {idError && <span className={styles.invalidInput}>최소 5자 이상, 영어와 숫자만 포함해주세요.</span>}
                </div>
                <div id="signUpEmail" className={styles.signUpBox}>
                    <label for='email'>이메일 <span className={styles.star}>*</span></label><br/>
                    <input type="text" name=""email id="email" maxlength="50" value={email}
                    placeholder="Email" className={styles.input} onChange={onChangeEmail}/>
                    {emailError && <span className={styles.invalidInput}>이메일 형식이 맞지 않습니다.</span>}
                </div>
                <div id="signUpPw" className={styles.signUpBox}>
                    <label for='password'>비밀번호 <span className={styles.star}>*</span></label><br/>
                    <input type="Password" name="password" id="password" maxlength="20" value={password}
                    placeholder="비밀번호" className={styles.input} onChange={onChangePassword}/>
                    {passwordError && <span className={styles.invalidInput}>최소 8자 이상, 영어와 숫자, 특수문자를 포함해주세요. </span>}
                    <br/><input type="Password" name="password" id="passwordConfirm" maxlength="20" value={passwordConfirm}
                    placeholder="비밀번호 재확인" className={styles.input} onChange={onChangeConfirmPassword}/>
                    {passwordConfirmError && <span className={styles.invalidInput}>비밀번호가 일치하지 않습니다.</span>}
                </div>
                <div id="signUpName" className={styles.signUpBox}>
                    <label for='name'>이름 <span className={styles.star}>*</span></label><br/>
                    <input type="text" name="name" id="name" maxlength="20" value={name}
                    placeholder="name" className={styles.input} onChange={onChangeUserName}/>
                    {nameError && <span className={styles.invalidInput}>필수사항입니다.</span>}
                    <input type="text" name="nickname" id="nickname" maxlength="20"
                    placeholder="nickname" className={styles.input} onChange={onChangeNickname}/>
                    {nicknameError && <span className={styles.invalidInput}>필수사항입니다.</span>}
                </div>
                    <div id="signUpGender" className={styles.signUpBox}>
                        <p>성별 <span className={styles.star}>*</span></p>
                        <label for='male'>남성</label>
                        <input type="radio" name="gender" id="male" value="남성" checked="checked"
                        className={styles.radio} onChange={(e) => checkOnlyOne(e.target)}/>
                        <label for='female'>여성</label>
                        <input type="radio" name="gender" id="female" value="여성" 
                        className={styles.radio} onChange={(e) => checkOnlyOne(e.target)}/>
                    </div>
                <div id="signUpBirthday" className={styles.signUpBox}>
                    <label for='yy'>생년월일 <span className={styles.star}>*</span></label><br/>
                    <select id='yy' className={styles.select}
                        value={form.year}
                        onChange={e =>setForm({ ...form, year: e.target.value })}
                    >
                    <option>년</option>
                        {years.map(item => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select id='mm' className={styles.select}
                        value={form.month}
                        onChange={e =>setForm({ ...form, month: e.target.value })}
                    >
                        <option>월</option>
                        {month.map(item => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select id='dd' className={styles.select}
                        value={form.day}
                        onChange={e =>setForm({ ...form, day: e.target.value })}
                    >
                        <option>일</option>
                        {days.map(item => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button className={`${styles.singUpSubmit} ${onSubmit? 'styles.btnAction' : 'styles.btnInaction'}`}
                onClick={onSubmit}>가입하기</button> 
                    
                </section>
            </div>

    );
};

export default SignUp;