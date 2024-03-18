import logo from './logo.svg';
import {HashRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import LobPage from "./pages/lobpage/LobPage";

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path={'/'} element={<Homepage />}/>
          <Route path={'/lob'} element={<LobPage />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
