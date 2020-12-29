import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {animateScroll as scrolly} from 'react-scroll'

import {
  Nav,
  MobileIcon,
  NavLogo,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbaStyled"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () =>{
    scrolly.scrollToTop();
  }


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              JJ
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink smooth to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth to="#portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth to="#skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth to="#resources">
                  Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth to="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
