import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/japan/home/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/japan'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
