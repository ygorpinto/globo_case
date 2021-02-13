import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .HomeIcon{
    fill:white;
    width:30px;
    height:30px;
  }
  .UserIcon{
    fill:white;
    width:15px;
    height:20px;
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

  .FilterIcon{
    fill:rgba(0,0,0,0.5);
  }
`


export default GlobalStyle;