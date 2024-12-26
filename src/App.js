import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import AllCollection from "./pages/AllCollection";
import Add from "./pages/Add";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/AllCollection" element={<AllCollection/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

