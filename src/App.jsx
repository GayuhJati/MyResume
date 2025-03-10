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
        <Route path="/" Component={HomePage} />
        <Route path="/Project" Component={ProjekPage}/>
        <Route path="/Resume" Component={ResumePage}/>
       </Routes>
       <FooterComponent />
      </div>
  )
}

export default App
