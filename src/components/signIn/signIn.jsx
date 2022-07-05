import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './signIn.module.css';

class SignIn extends Component {
    state={
        id:"",
        password:"",
    }

    loginHandler = e =>{
        const{name, value} = e.target;
        this.setState({[name]:value});
    }
    loginClickHandler = () => {
        const { email, password } = this.state;
        fetch("http://10.58.2.17:8000/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            password,
            }),
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }; 
    render(){
        const {isOpen,close} = this.props;
        return (
            <>
            {isOpen?(
            <div className={styles.container}>
                <section id="login" className={styles.login__container}>
                    <span className={styles.close} onClick={close}>
                    &times;
                    </span>
                    <h1 className={styles.login_logo}>DayTD</h1>
                    <div id="login__id" className={styles.login__idpw}>
                        <h4>아이디</h4>
                        <input type="ID" name="" id="" 
                        placeholder="ID" className={styles.input}/>
                    </div>
                    <div id="login__pw" className={styles.login__idpw}>
                        <h4>Password</h4>
                        <input type="Password" name="" id="" 
                        placeholder="Password" className={styles.input}/>
                    </div>
                    
                    <div className={styles.option}>
                    <div className={styles.login__remember}>
                            <input type="checkbox" name="" id=""/> 
                            Remember Me?
                    </div>
                    <Link className={styles.signUp_a} to="/SignUp" onClick={close}>
                        <a href="#" className={styles.signUp}>회원가입하기</a>
                    </Link>
                    </div>

                    <div className={styles.login__submit} onClick={close}>
                        <button>로그인하기</button>
                    </div>   
                    
                </section>
            </div>
            ):null}
        </>
    );
    }
};

export default SignIn;