import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import styles from './weather.module.css';

const Weather = () => {
    let today = new Date();
    const dayArray = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

    return (
        <div className={styles.background}>
            <section className={styles.container}>
                <h3 className={styles.todayTxt}>오늘은?</h3>
                <h2 className={styles.today}>{today.getMonth() + 1}월 {today.getDate()}일 <span className={styles.day}>{dayArray[today.getDay()-1]}</span></h2>
                <div className={styles.weather_container}>
                    <img className={styles.weatherImg} src={process.env.PUBLIC_URL + '/images/sun.png'} alt=""/>
                    <ul className={styles.temperature}>
                        <li className={styles.TMPRT}>11'</li>
                        <li className={styles.TMPRT_MinMax}>24'/11' 체감온도 13'</li>
                        <li className={styles.location}><FontAwesomeIcon className={styles.locIcon} icon={faLocationDot} />서대문구</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Weather;