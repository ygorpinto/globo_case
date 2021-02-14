import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
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

  .AddUserForm{
    display:flex;
    justify-content:center;
    align-items:center;
    width:50vw;
    height:50vh;
  }

  .AddUserFormIn{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
  }

  .FormUser{
    padding: 5px 5px 5px 5px;
    font-weight:bold;
    font-family: 'Roboto', sans-serif;
    font-size:0.7rem;
  }

  .FormButton{
    margin-top:35px;
    padding:8px;
    display:flex;
    font-size:0.7rem;
    border:none;
    border-radius:4px;
    background:#D93067;
    height:32px;
    width:10vw;
    justify-content:space-between;
    align-items:center;
    color:white;
  }

  .FormUserInput{
    padding: 5px 5px 5px 5px;
    border: rgba(0,0,0,0.8);
  }
`


export default GlobalStyle;