import logo from './logo.svg';
import './App.css';

import HomePage from "./Pages/HomePage";
import ListPage from "./Pages/ListPage";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='Login' element = {<HomePage/>}/>
        <Route path='ToDo' element = {<ListPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
