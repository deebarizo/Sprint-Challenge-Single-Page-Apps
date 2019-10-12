import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flexbox;
  flex-direction: row;
`;

const NavElementDiv = styled.div`
  border: 1px dashed gray;
  padding: 0.2rem;
  margin-right: 0.2rem;
`;

export default function App() {
  return (
    <main>
      <Header />
      <NavDiv>
        <NavElementDiv>
          <Link to="/">Home</Link>
        </NavElementDiv>
        <NavElementDiv>
          <Link to="/characters">Characters</Link>
        </NavElementDiv>
      </NavDiv>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
