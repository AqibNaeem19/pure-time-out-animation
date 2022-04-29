import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  let dropdownRef = useRef();

  const openMenu = () => {
    setToggleMenu(true)
  }

  const closeMenu = () => {
    dropdownRef.current.classList.add('slideout')
    setTimeout(() => (setToggleMenu(false)), 1000)
  }

  useEffect(() => {
    if (dropdownRef.current) {
      let toggleHandler = event => {
        if (!dropdownRef.current.contains(event.target)) {
          closeMenu(false)
        }
      }
      document.addEventListener('mousedown', toggleHandler)

      return () => (
        document.removeEventListener('mousedown', toggleHandler)
      )
    }
  })


  return (
    <div className="dropDownContainer">
      <button className="searchBtn" onClick={openMenu}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {toggleMenu &&
        <div ref={dropdownRef} id="dropItemsList" className={`dropDownItems`} >
          <div className="searchBarContainer">
            <input type="text" name="" placeholder="Search..." id="" />
            <button onClick={closeMenu}>Search</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
