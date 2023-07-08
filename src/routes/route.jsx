import { Route,Routes } from "react-router-dom";
import MainPage from "../components/pages/main_page";
import AboutMe from "../components/pages/about_me";
import UserInfo from "../components/pages/about_user";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/user_info/:id" element={<UserInfo/>}/>
        </Routes>
    )
}

export default AppRoutes