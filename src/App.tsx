import React from 'react';
import './App.css';
import {Sidebar} from "./Components/Navbar/Sidebar";
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer"
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Route, Switch} from 'react-router-dom';
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </Switch>


            </div>
        </div>
    );
}

export default App;

