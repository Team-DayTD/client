import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faHeart,faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import SignIn from '../signIn/signIn';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: false,
        };
    }
    openLogin = () => {
        this.setState({isLoginOpen: true});
    };
    closeLogin = () => {
        this.setState({isLoginOpen: false});
    }

    render() {
        return (
            <div className={styles.container}>
            <nav>
                <Link className={styles.nav_a} to="/MainPage">
                <h1 className={styles.logo}>DayTD</h1>
                </Link>
                <ul className={styles.menuBar}>
                    <Link className={styles.nav_a} to="/MainPage"><li className={styles.menu}>
                        <FontAwesomeIcon icon={faHouse} />
                    </li></Link>
                    <Link className={styles.nav_a} to="/LikePage"><li className={styles.menu}>
                    <FontAwesomeIcon icon={faHeart} />
                    </li></Link>
                    <Link className={styles.nav_a} to="/MyPage"><li className={styles.menu}>
                    <FontAwesomeIcon icon={faUser} />
                    </li></Link>
                    <li className={styles.menu} onClick={this.openLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    </li>
                </ul>
                <SignIn isOpen={this.state.isLoginOpen} close={this.closeLogin}/>
            </nav>
            </div>
        );
    }
}

export default Navbar;