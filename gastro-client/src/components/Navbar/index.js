import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItems, 
  NavLinks, 
  NavBtn, 
  NavBtnLink 
} from './NavbarElements'

const Navbar = ( {toggle} ) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>GastroAPP</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
                <NavLinks to='patient'>Patient</NavLinks>
            </NavItems>
            <NavItems>
                <NavLinks to='actions'>Actions</NavLinks>
            </NavItems>
            <NavItems>
                <NavLinks to='pieces'>Piéces à joindre</NavLinks>
            </NavItems>
            <NavItems>
                <NavLinks to='conclusion'>Conclusion</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/PDF'>Générer le rapport</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
);
};

export default Navbar