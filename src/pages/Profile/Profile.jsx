import styled from "styled-components"
import {userData} from "../../userData/userData";

const User = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const UserImage = styled.img``;

const UserName = styled.div``;

export function Profile() {


    return (
        <>
            <User>
                <UserImage src={userData.icon}/>
                <UserName>
                    {userData.name}
                </UserName>
            </User>
        </>
    )
}

