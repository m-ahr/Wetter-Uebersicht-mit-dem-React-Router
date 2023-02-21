import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';
import WetterList from './components/wetterList';
import HeaderNav from './components/headerNav';
import WetterDetails from './components/wetterDetails';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/wetterList' element={<WetterList/>}/>
        <Route path='/wetterDetails' element={<WetterDetails/>}/>
      </Routes>
      <h1>App-Übersicht</h1>
      
      <hr/>
    </div>
  );
}

export default App;
