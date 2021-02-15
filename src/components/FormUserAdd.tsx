import db from '../../db.json'
import Input from './Input/Input'
import AddUserButton from './Buttons/AddUserButton'
import UserPlus from './Icons/UserPlus'
import LogoutIcon from '../components/Icons/LogoutIcon'
import FormCloseButton from '../components/Buttons/FormCloseButton'
import {useState} from 'react'

const FormUserAdd = (props) => {

    const [user,setuser] = useState("");
    const [email, setemail] = useState("");

    const AddUser = (e) => {
        e.preventDefault();
        console.log(user);
        console.log(email);   
    }

    return (
        <div className="AddUserForm">
            <div className="btnFormBox">
            <FormCloseButton onClick={props.func}><LogoutIcon/></FormCloseButton>
            </div>
            <form className="AddUserFormIn">
                <label className="FormUser">{db.usersHeader.user}:</label>
                <Input 
                onChange={e=>setuser(e.target.value)}
                placeholder="Insira seu nome Completo"
                className="FormUserInput"></Input>
                <label className="FormUser">{db.usersHeader.email}:</label>
                <Input 
                onChange={e=>setemail(e.target.value)}
                placeholder="Insira o seu Email"
                className="FormUserInput"></Input>
                <AddUserButton onClick={AddUser} type="submit" className="FormButton"><UserPlus/>{db.button.buttontxt}</AddUserButton>
            </form>
        </div>
    )
}

export default FormUserAdd;