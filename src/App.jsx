import {Routes, Route} from "react-router-dom";
import { HomePage} from "./pages/HomePage";
import { ProjekPage} from "./pages/ProjekPage";
import { ResumePage} from "./pages/ResumePage";
import { NavBarComponent } from "./components/NavBarComponent";
import { FooterComponent } from "./components/FooterComponent";



function App() {

  return (
      <div>
      <NavBarComponent/>
       <Routes>
        <Route path={import.meta.env.BASE_URL} Component={HomePage} />
        <Route path={import.meta.env.BASE_URL + "Project"} Component={ProjekPage}/>
        <Route path={import.meta.env.BASE_URL + "Resume"} Component={ResumePage}/>
       </Routes>
       <FooterComponent />
      </div>
  )
}

export default App
