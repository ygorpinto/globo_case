import styled from 'styled-components'

const Input = styled.input`
::placeholder{
    font-style: italic;
};
border-radius:5px;
border-color:rgba(0,0,0,0.1);
box-shadow:0px 1px rgba(0,0,0,0.1);
height:4vh;
width:18vw;
background-color:#F5F5F5;
border:none;
`

export default Input;