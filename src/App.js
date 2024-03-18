import logo from './logo.svg';
import {HashRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path={'/'} element={<p>This is the lob ster fishing support site but it is under construction. We do not collect any user data. </p>}/>
          <Route path={'/sup'} element={<p>supa</p>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
