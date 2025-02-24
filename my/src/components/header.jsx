import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPlus, faExpand, faTableCells, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="language-selector">
        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="flag-icon" />
        <span>EN ▼</span>
      </div>

      <div className="icons">
         <button className="pos-button" title="P.O.S">
        <FontAwesomeIcon icon={faTableCells}   /> POS
      </button>
        <FontAwesomeIcon icon={faPlus} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon"title="notififations"  />
      
      </div>

      <div className="profile" onClick={() => setProfileOpen(!isProfileOpen)}>
        <div className="profile-icon">SA</div>
        <span className="super">Super Admin ▼</span>

        
        {isProfileOpen && (
          <div className="dropdown">
            <p><FontAwesomeIcon icon={faUser} /> Profile</p>
            <p><FontAwesomeIcon icon={faCog} /> Settings</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
