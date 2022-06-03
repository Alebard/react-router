import React, {useState} from "react";
import {setIsAutorizedUserStorage} from "../../storage/stoage";
import {Error} from "../../components/Error/Error";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {userData} from "../../userData/userData";

function validate(name, password) {
    return userData.name === name && userData.password === password
}

const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

const Input = styled.input`
        margin-top: 20px;
    `;

const Button = styled.button`
        margin-top: 20px;    
    `;

export function Login({setIsAutorizedUser}) {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    function changeUserName(e) {
        setUserName(e.target.value)
    }

    function changeUserPassword(e) {
        setUserPassword(e.target.value)
    }

    function autorization(e) {
        e.preventDefault()
        if (validate(userName, userPassword)){
            setIsAutorizedUserStorage('true');
            setIsAutorizedUser(true)
            navigate("/profile");
        }else{
            setError(true)
        }
    }

    return(
        <>
            <Form onSubmit={autorization} >
                <Input type="text" value={userName} onChange={changeUserName}/>
                <Input type="text" value={userPassword} onChange={changeUserPassword}/>
                <Button>Log In</Button>
                {error && <Error />}
            </Form>
        </>
    )
}