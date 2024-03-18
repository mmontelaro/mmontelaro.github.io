import logo from './logo.svg';
import {HashRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path={'/'} element={<p>yo</p>}/>
          <Route path={'/sup'} element={<p>sup</p>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
