import db from '../../db.json'
import Input from './Input/Input'
import AddUserButton from './Buttons/AddUserButton'
import UserPlus from './Icons/UserPlus'
import LogoutIcon from '../components/Icons/LogoutIcon'
import FormCloseButton from '../components/Buttons/FormCloseButton'

const FormUserAdd = (props) => {
    return (
        <div className="AddUserForm">
            <div className="btnFormBox">
            <FormCloseButton onClick={props.func}><LogoutIcon/></FormCloseButton>
            </div>
            <form className="AddUserFormIn">
                <label className="FormUser">{db.usersHeader.user}:</label>
                <Input 
                placeholder="Insira seu nome Completo"
                className="FormUserInput"></Input>
                <label className="FormUser">{db.usersHeader.email}:</label>
                <Input 
                placeholder="Insira o seu Email"
                className="FormUserInput"></Input>
                <AddUserButton type="submit" className="FormButton"><UserPlus/>{db.button.buttontxt}</AddUserButton>
            </form>
        </div>
    )
}

export default FormUserAdd;