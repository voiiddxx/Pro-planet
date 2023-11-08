import React, { useState } from 'react'
import "./Usernav.css";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSquarePlus  } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket, faTree } from '@fortawesome/free-solid-svg-icons'
import Addpost from '../Modals/Addpost/Addpost';
import { useNavigate } from 'react-router'
import logo from "./logo.svg"
const Usernav = () => {
  
const navigate = useNavigate();
  const [OpenAddpostModal, setOpenAddpostModal] = useState(false);

  const CloseModal = ()=>{
    setOpenAddpostModal(false);
  }
  return (
    <>
    <div className="user-nav">
      <div className="user-nav-left">
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className="user-nav-mid">
      <input type="text" value="Search here" />
      </div>
      <div className="user-nav-right">
      <div className="nav-button">
      <FontAwesomeIcon onClick={()=>{
        setOpenAddpostModal(true);
      }} icon={faSquarePlus} size='lg' color='#212121;' />
      </div>
      <div onClick={()=>{
         localStorage.removeItem("x-auth-token");
         navigate("/Login");
      }} className="nav-button">
      <FontAwesomeIcon icon={faRightFromBracket} size='lg' color='#212121;' />
      </div>
      </div>
    </div>

    {
      OpenAddpostModal!== false ? <Addpost close={CloseModal}/>  :<p></p>
    }
    </>

    
  )
}

export default Usernav