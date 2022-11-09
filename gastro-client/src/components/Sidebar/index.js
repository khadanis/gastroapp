import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen ={isOpen}onClick={toggle}>
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
           <SidebarMenu>
              <SidebarLink to ="patient" onClick={toggle}>Patient</SidebarLink>
              <SidebarLink to ="action"onClick={toggle}>Action</SidebarLink>
              <SidebarLink to ="pieces"onClick={toggle}>Piéces à joindre</SidebarLink>
              <SidebarLink to ="conclusion"onClick={toggle}>Conclusion</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to= '/PDF'>Générer le rapport</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>                                I
    </SidebarContainer>
  )
}

export default Sidebar