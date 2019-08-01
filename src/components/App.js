import React, {Fragment} from 'react'
import Account from "./Account"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
        background:${props => (props.dark ? `rgba(0, 0, 0, 0.9)` : `#fff`)};
        font-family: 'Open Sans', sans-serif;
        color:${props => (props.dark ? `#fff` : `#000`)};
    }
`

const App = () => {

    return (
        <Fragment>
          <Account />
          <GlobalStyle />
        </Fragment>
    );
}

export default App;
