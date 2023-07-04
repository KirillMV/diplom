import { Route,Routes } from "react-router-dom";
import MainPage from "../components/pages/main_page";
import AboutMe from "../components/pages/about_me";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutMe/>}/>
        </Routes>
    )
}

export default AppRoutes