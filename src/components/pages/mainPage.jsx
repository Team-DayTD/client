import React, { Component } from 'react';
import Weather from '../weather/weather';
import Navbar from '../navbar/navbar';
import CodyRecoPage from './codyRecoPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Weather/>
                <CodyRecoPage/>
            </div>
        );
    }
}

export default MainPage;