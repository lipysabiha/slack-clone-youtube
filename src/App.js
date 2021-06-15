import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header/>
            <AppBody>
              <Sidebar/>
                <Switch>
                  <Route path="/" exact>
                    {/* Chat */}
                    <Chat />
                  </Route>
                </Switch>
            </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;