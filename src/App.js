import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Papa from "papaparse";
// import { Context } from './Components/context'
import { HomePage } from './Components/HomePage';
import { CaverPage21 } from './Components/CaverPage21';
import { CaverPage22 } from './Components/CaverPage22';
import { CaverPage23 } from './Components/CaverPage23';
import SinglPage from './Components/SinglPage';
import { Context } from './Components/context'
// import { useParseSongs } from './Components/API/SheetService';
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
  const[url, setUrl] = useState("")
  // const [cavers, setCavers] = useState('')

  console.log(sings)

    const urlParse21 =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbZ-zv6Iw7YB8B8IYyayLqLPyJYxdBl9tJoNB93wUb6_FmCntCAoiHEWmPo8Ohpg4LjZCLhU68a3no/pub?output=csv";
    const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBQ847ey_0J68AbS-jSJD8LwtsxtFK3tbX5lSoNxhgqwKy6R9gz2ITVOJXzAT-IPkPoNIZBgPcrDC_/pub?output=csv"
  //   const updateData = (value) => {
  //     setSongs({value })
  //  }
  return (
    <div className="App">
      <Fragment>
      <Context.Provider value={{sings, setSings}}>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route path="/cavers21" element={<CaverPage21/>} />
         <Route path="/cavers22" element={<CaverPage22/>} />
         <Route path="/cavers23" element={<CaverPage23/>} />
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
