import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    background: #000;
    min-height:45px;
`

const Header = () => {

    return (
        <Nav>
            <h1>Header</h1>
        </Nav>
    )
}

export default Header