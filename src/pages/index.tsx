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
import HomeIcon from '../components/Icons/HomeIcon'
import UserIcon from '../components/Icons/UserIcon'
import ShieldIcon from '../components/Icons/ShieldIcon'
import SearchIcon from '../components/Icons/SearchIcon'
import FilterIcon from '../components/Icons/FilterIcon'
import db from '../../db.json'
import GlobalStyle from '../components/GlobalStyles'

const App = () => (
<>
<GlobalStyle/>
<Container>
  <WidgetUsers>
    <MainHeader>
    <LeftHeader>
    <HomeButton><HomeIcon/></HomeButton>
    <Widget>
    <UserButton><UserIcon/></UserButton>
    <ShieldButton><ShieldIcon/></ShieldButton>
    </Widget>
    <Widget>
    <Input
    placeholder={db.input.placeholder}
    ></Input>
    <SearchButton><SearchIcon/></SearchButton>
    </Widget>
    </LeftHeader>
    <RightHeader>
      <FilterButton><FilterIcon/></FilterButton>
      <AddUserButton><UserIcon/>{db.button.buttontxt}</AddUserButton>
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
  </WidgetUsers>
</Container>
</>
)

export default App
