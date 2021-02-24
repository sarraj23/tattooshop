import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Tattoo</NavLink>
                <NavIcon onClick={toggle}>
                    <p> Services </p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;
