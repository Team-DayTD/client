import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/navbar/navbar';
import MainPage from './components/pages/mainPage';
import LikePage from './components/pages/likePage';
import MyPage from './components/pages/myPage';
import SignUp from './components/signUp/signUp';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage reset='best'/>}></Route>
          <Route path="/MainPage" element={<MainPage reset='best'/>}></Route>
          <Route path="/LikePage" element={<LikePage/>}></Route>
          <Route path="/MyPage" element={<MyPage/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
