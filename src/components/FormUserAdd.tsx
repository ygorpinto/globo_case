import db from '../../db.json'
import Input from './Input/Input'
import AddUserButton from './Buttons/AddUserButton'
import UserPlus from './Icons/UserPlus'
import LogoutIcon from '../components/Icons/LogoutIcon'
import FormCloseButton from '../components/Buttons/FormCloseButton'
import {useState} from 'react'
import axios from 'axios'

const FormUserAdd = (props) => {

    const [user,setuser] = useState("");
    const [email, setemail] = useState("");

    const AddUser = async (e) => {
        const date = new Date()
        let data = JSON.stringify({
            username:user,
            email: email,
            created:`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
          });
        axios.post("http://localhost:3000/api/users",data,{headers:{"Content-Type" : "application/json"}});
        e.preventDefault();
        alert(`O usuário ${user} foi cadastrado com sucesso.`)   
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