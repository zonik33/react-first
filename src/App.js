import "./App.css";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <DialogsContainer store={props.store}/>}/>
                        <Route path='/profile/:userId' element={
                            <ProfileContainer/>}/>
                        <Route path='/profile/*' element={
                            <ProfileContainer/>}/>
                        <Route path="/users" element={
                            <UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
