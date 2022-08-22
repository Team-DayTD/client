import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faHeart,faUser, faArrowRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import SignIn from '../../Pages/SignIn';

const Navbar = memo(() => {
  const sessionStorage = window.sessionStorage;
  const [isSIModal, SetIsSIModal] = useState(false);
  const [session, SetSession] = useState(false);

  const handleSignInModal = () => {
    SetIsSIModal(!isSIModal);
  };

  const handleLogOut = ()=>{
      sessionStorage.removeItem("loginId");
      SetSession(!session);
  }

  useEffect(()=>{
  },[])

  return (
    <div className='navContainer'>
      <nav className='nav'>
        <Link to="/Main">
          <h1 className='logo'>DayTD</h1>
        </Link>
        <ul className='menu'>
          <Link to="/Main">
            <li className='item'><FontAwesomeIcon icon={faHouse}/></li>
          </Link>
          <Link to="/Like">
            <li className='item'><FontAwesomeIcon icon={faHeart}/></li>
          </Link>
          {JSON.stringify(sessionStorage.loginId)?
          <Link to="/MyPage">
            <li className='item'><FontAwesomeIcon icon={faUser}/></li>
          </Link>
          :<li className='item' onClick={handleSignInModal}>
            <FontAwesomeIcon icon={faUser} />
          </li>}
          {JSON.stringify(sessionStorage.loginId)?
          <li className='item' onClick={handleLogOut}> 
            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
          </li>
          :null
          }
        </ul>
        <SignIn isModal={isSIModal} close={handleSignInModal}/>
      </nav>
    </div>
  );
})

export default Navbar;