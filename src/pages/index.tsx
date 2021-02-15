import db from '../../db.json'
import GlobalStyle from '../components/GlobalStyles'
import Container from '../components/Container/Container'
import MainHeader from '../components/Headers/MainHeader'
import LeftHeader from '../components/Headers/LeftHeader'
import RightHeader from '../components/Headers/RightHeader'
import WidgetUsers from '../components/WidgetUsers/WidgetUsers'
import Widget from '../components/Widget'
import Input from '../components/Input/Input'
import UsersHeader from '../components/UsersHeader/UsersHeader'
import HomeButton from '../components/Buttons/HomeButton'
import UserButton from '../components/Buttons/UserButton'
import ShieldButton from '../components/Buttons/ShieldButton'
import SearchButton from '../components/Buttons/SearchButton'
import FilterButton from '../components/Buttons/FilterButton'
import AddUserButton from '../components/Buttons/AddUserButton'
import MainIcon from '../components/Icons/MainIcon'
import UserIcon from '../components/Icons/UserIcon'
import HomeIcon from '../components/Icons/HomeIcon'
import ShieldIcon from '../components/Icons/ShieldIcon'
import SearchIcon from '../components/Icons/SearchIcon'
import FilterIcon from '../components/Icons/FilterIcon'
import SettingsIcon from '../components/Icons/SettingsIcon'
import LogoutIcon from '../components/Icons/LogoutIcon'
import FormUserAdd from '../components/FormUserAdd'
import { useState, useEffect } from 'react'
import UsersContainer from '../components/Container/UsersContainer'

const App = () => {

  const [users,setusers] = useState([]);
  const [show, setshow] = useState(false);
  const showform = () => {
    setshow(true);
  };

  const hideform = () => {
    setshow(false);
  };

  useEffect(()=>{
    fetch("http://localhost:3000/api/users")
    .then(response=>response.json())
    .then(data=>setusers(data))
},[users])

console.log(users);


return (
<>
<GlobalStyle/>
<Container>
  <WidgetUsers>
    <MainHeader>
    <LeftHeader>
    <HomeButton><MainIcon/></HomeButton>
    <Widget>
    <ShieldButton><ShieldIcon/></ShieldButton>
    <UserButton><UserIcon/></UserButton>
    </Widget>
    <Widget>
    <Input
    placeholder={db.input.placeholder}
    ></Input>
    <SearchButton><SearchIcon/></SearchButton>
    </Widget>
    </LeftHeader>
    <RightHeader>
      <Widget>
      <FilterButton><FilterIcon/></FilterButton>
      <AddUserButton
      onClick={showform}
      ><UserIcon/>{db.button.buttontxt}</AddUserButton>
      </Widget>
      <Widget className="icons-group">
        <HomeIcon/><SettingsIcon/><LogoutIcon/>
      </Widget>
    </RightHeader>
    </MainHeader>
    <UsersHeader>
      <p>{db.usersHeader.user}</p>
      <p>{db.usersHeader.email}</p>
      <p>{db.usersHeader.dtinc}</p>
      <p>{db.usersHeader.dtalt}</p>
      <p>{db.usersHeader.rules}</p>
      <p>{db.usersHeader.status}</p>
      <p>{db.usersHeader.actions}</p>
    </UsersHeader>
    <Widget>
    {show?<FormUserAdd func={hideform}/>:null}
    </Widget>
    <UsersContainer>
      {users.map((user)=>{
        return (
          <div className="mainUsers">
          <div className="user"><p>{user.username}</p></div>
          <div className="email"><p>{user.email}</p></div>
          <div className="created"><p>{user.created}</p></div>
          <div className="dtalt"><p>N/A</p></div>
          <div className="regras"><p>01</p></div>
          <div className="status"><p>Ativo</p></div>
          <div className="actions"><p></p></div>
          </div>
        )
      })}
    </UsersContainer>
  </WidgetUsers>
</Container>
</>
)
}
export default App
