import React, {Fragment} from 'react'
import Account from "./Account";
import styled, {createGlobalStyle} from 'styled-components'
import Nav from './Nav'

const GlobalStyle = createGlobalStyle`
    body {
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
        background:#424250;
        font-family: 'Open Sans', sans-serif;
        color:#fff;
        p,
        h1,
        h2 {
            margin:0;
        }
    }
    #root {
        width:92%;
        height:100vh;
        padding:0 4%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
const Wrapper = styled.div`
    display:flex;
    width:100%;
    max-width:1280px;
    height:300px;
    background:#33333d;
    border-radius:5px;
    -webkit-box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.37); 
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.37);
`

const App = () => {

    return (
        <Fragment>
            <Wrapper>
                <Nav />
                {/*<Account/>*/}
            </Wrapper>
            <GlobalStyle />
        </Fragment>
    );
}

export default App;
