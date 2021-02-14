import db from '../../db.json'
import Input from '../components/Input/Input'
import AddUserButton from '../components/Buttons/AddUserButton'
import UserPlus from '../components/Icons/UserPlus'

const FormUserAdd = () => {
    return (
        <div className="AddUserForm">
            <form className="AddUserFormIn">
                <label className="FormUser">{db.usersHeader.user}</label>
                <Input 
                placeholder="Insira seu novo Usuário"
                className="FormUserInput"></Input>
                <label className="FormUser">{db.usersHeader.email}</label>
                <Input 
                placeholder="Insira seu novo Email"
                className="FormUserInput"></Input>
                <AddUserButton className="FormButton"><UserPlus/>{db.button.buttontxt}</AddUserButton>
            </form>
        </div>
    )
}

export default FormUserAdd;