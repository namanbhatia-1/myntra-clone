import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    navigate('/Login'); 
  };

  return (
    <>
      <div className="flex w-full p-3 pb-1 shadow-md">
        <div className="ml-7 flex justify-center items-center">
          <a href='https://myntra-clone-frontend-dtdi.onrender.com/' >
          <img className="w-20 m-2 cursor-pointer" src="./myntra-logo.png" alt="Logo" />
          </a>
    <a href="https://myntra-clone-frontend-dtdi.onrender.com/">
          <img className="w-20 m-2" src="./myntra-logo.png" alt="Logo" />
    </a>
        </div>
        <div className="w-1/4 flex gap-7 justify-center items-center ml-28 font-Teko">
          <p className="text-xl font-medium cursor-pointer">MEN</p>
          <p className="text-xl font-medium cursor-pointer">WOMEN</p>
          <p className="text-xl font-medium cursor-pointer">KIDS</p>
          <p className="text-xl font-medium cursor-pointer">HOME&LIVING</p>
          <p className="text-xl font-medium cursor-pointer">BEAUTY</p>
          <p className="text-xl font-medium cursor-pointer">STUDIO</p>
        </div>
        <div className="w-1/2 ml-24 mt-2 h-10 flex">
          <input
            className="w-full py-2 bg-gray-100 pl-9 p-5 text-sm rounded-sm"
            placeholder="Search for products,brands and more"
          />
          <img className="w-5 ml-2 absolute mx-2 mt-2.5 bg-gray-100" src="./search.png" alt="Search" />
        </div>
        <div className="w-96 flex justify-center items-center gap-5 font-Teko">
          <div onClick={handleProfileClick} className="flex flex-col justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="h-5" />
            <p className="text-lg">Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faHeart} className="h-5" />
            <p className="text-lg">Wishlist</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} className="h-5" />
            <p className="text-lg">Bag</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
