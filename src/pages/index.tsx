import GlobalStyle from '../components/GlobalStyles'
import db from '../../db.json'
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
import OpenUserAdd from '../pages/_moduleAddUser'
import FormUserAdd from '../components/FormAddUser'

const App = () => (
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
      onClick={OpenUserAdd}
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
    <FormUserAdd/>
    </Widget>
  </WidgetUsers>
</Container>
</>
)

export default App
