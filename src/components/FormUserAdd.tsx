import db from '../../db.json'
import Input from './Input/Input'
import AddUserButton from './Buttons/AddUserButton'
import UserPlus from './Icons/UserPlus'

const FormUserAdd = () => {
    return (
        <div className="AddUserForm">
            <form className="AddUserFormIn">
                <label className="FormUser">{db.usersHeader.user}</label>
                <Input 
                placeholder="Insira seu nome Completo"
                className="FormUserInput"></Input>
                <label className="FormUser">{db.usersHeader.email}</label>
                <Input 
                placeholder="Insira o seu Email"
                className="FormUserInput"></Input>
                <AddUserButton className="FormButton"><UserPlus/>{db.button.buttontxt}</AddUserButton>
            </form>
        </div>
    )
}

export default FormUserAdd;