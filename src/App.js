import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Main from './Pages/Main';
import Like from './Pages/Like';
import MyPage from './Pages/MyPage';
import SignUp from './Pages/SignUp';
import "./style/main.scss";
import { useEffect } from 'react';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main reset='best'/>}></Route>
          <Route path="/Main" element={<Main reset='best'/>}></Route>
          <Route path="/Like" element={<Like/>}></Route>
          <Route path="/MyPage" element={<MyPage/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
