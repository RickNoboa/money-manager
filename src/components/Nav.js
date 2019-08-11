import React from 'react'
import styled from 'styled-components'
import logoImg from '../images/logo.png'

const NavWrapper = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
`
const Logo = styled.span`
    background:url(${logoImg}) 0 0/40px auto no-repeat;
    width:40px;
    height:37px;
    display:inline-block;
    margin-left:10px;
`

const Nav = () => {

    return (
        <NavWrapper>
            <Logo />
        </NavWrapper>
    )
}

export default Nav