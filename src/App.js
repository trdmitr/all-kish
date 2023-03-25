import React from 'react';
import { Fragment, useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage';
import { CaverPage21 } from './Components/CaverPage21';
import SinglPage from './Components/SinglPage';
import { Context } from './Components/context'
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Страница <code>{location.pathname}</code> не найдена!
      </h3>
      <Link to = "/">На главную</Link>
    </div>
  );
}
function App() {
  const [sings, setSings] = useState({});
  // console.log(sings)
  return (
    <div className="App">
      <Fragment>
      <Context.Provider value={{sings, setSings}}>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route path="/cavers21" element={<CaverPage21/>} />
         <Route path="/cavers22" element={<CaverPage21/>} />
         <Route path="/cavers23" element={<CaverPage21/>} />
         <Route path="/cavers/:id" element={<SinglPage songs = {sings} />} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
       </Context.Provider>   
   </Fragment>
    </div>
  );
}

export default App;
