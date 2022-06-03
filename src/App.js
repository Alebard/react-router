import React from "react";
import {BrowserRouter as Router,} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import styled from "styled-components";

const Wrapp = styled.div`
      font-family: Arial, sans-serif;
      font-size: 14px
`;

export default function App() {

    return (
        <Router>
            <Wrapp>
                <Navbar />
                <Main />
            </Wrapp>
        </Router>
    );
}
