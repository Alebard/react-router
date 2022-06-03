import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {News} from "../../pages/News/News";
import {Profile} from "../../pages/Profile/Profile";
import React, {useState} from "react";
import {Login} from "../../pages/Login/Login";
import styled from "styled-components";
import {getIsAutorizedUserStorage} from "../../storage/stoage";

const Wrapper = styled.div`
        width: 200px;
        margin: 50px auto 0;
    `;

export function Main() {
    const [isAutorizedUsed, setIsAutorizedUser] = useState(getIsAutorizedUserStorage())
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/profile"
                       element={!isAutorizedUsed
                           ? <Navigate to="/login"/>
                           : <Profile />}/>
                <Route path="/login" element={<Login setIsAutorizedUser={setIsAutorizedUser} />}/>
            </Routes>
        </Wrapper>
    )
}