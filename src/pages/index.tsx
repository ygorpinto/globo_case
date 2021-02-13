import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import WidgetUsers from '../components/WidgetUsers/WidgetUsers'
import UsersHeader from '../components/UsersHeader/UsersHeader'
import HomeButton from '../components/Buttons/HomeButton'
import UserButton from '../components/Buttons/UserButton'
import HomeIcon from '../components/Icons/HomeIcon'
import UserIcon from '../components/Icons/UserIcon'
import db from '../../db.json'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .HomeIcon{
    width:30px;
    height:30px;
  }
  .UserIcon{
    width:20px;
    height:25px;
  }
`

const App = () => (
<>
<GlobalStyle/>
<Container>
  <WidgetUsers>
    <Header>
    <HomeButton><HomeIcon/></HomeButton><UserButton><UserIcon/></UserButton>
    </Header>
    <UsersHeader>
      <p>{db.usersHeader.user}</p>
      <p>{db.usersHeader.email}</p>
      <p>{db.usersHeader.dtinc}</p>
      <p>{db.usersHeader.dtalt}</p>
      <p>{db.usersHeader.rules}</p>
      <p>{db.usersHeader.status}</p>
      <p>{db.usersHeader.actions}</p>
    </UsersHeader>
  </WidgetUsers>
</Container>
</>
)

export default App
