import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .MainIcon{
    fill:white;
    width:20px;
    height:20px;
  }
  .UserIcon{
    fill:white;
    width:15px;
    height:15px;
  }
  .ShieldIcon{
    fill:rgba(0,0,0,0.5);
    width:20px;
    height:25px;
  }

  .SearchIcon{
    fill:rgba(0,0,0,0.5);
    width:20px;
    height:25px;
}

  .FillIcon{
    fill:rgba(0,0,0,0.5);
    width:20px;
    height:20px;
  }

  .icons-group{
    height:10vh;
    width:8vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`


export default GlobalStyle;