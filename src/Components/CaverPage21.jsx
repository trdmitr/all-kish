import React, { useContext, useEffect, useMemo, useState } from 'react'
import Papa from "papaparse";
import { Link, useNavigate } from 'react-router-dom';
import classes from "./CaverPage.module.css"
import { Context } from './context'

export const CaverPage21 = () => {
  const [data, setData] = useState({});
  // const singData = useRef({})
  const [songError, setSongError] = useState(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const urlParse =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbZ-zv6Iw7YB8B8IYyayLqLPyJYxdBl9tJoNB93wUb6_FmCntCAoiHEWmPo8Ohpg4LjZCLhU68a3no/pub?output=csv";
  useEffect (() => {
    Papa.parse(urlParse,
       {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data)
          // console.log(data)
        },
        skipEmptyLines: true,
        error: (error) => {
          console.error(error);
          setSongError(true)
      }
      })
      }, [])
     
      console.log(data)
     
        const songs = Array.from(data);
        const {sings, setSings} = useContext(Context);
        // updateData(songs)
      // const songs =
      
      const singContent = useMemo(() => {
        // if (songError) 
        //   return <h1 >Ошибка загрузки!</h1>
        if (songs.length === 0) {
           return <h2>Load...</h2>
           }
         
        return  songs?.map((song, i) => {
          return (
             <Link key={i} to={`/cavers/${song.id}`} onClick = {() => setSings(songs)}>
            <div className={classes.media}>
              <div className={classes.mediaImage}>
                <img src={song.photo} width={100} alt={song.name} />
                {/* <Img imgUrl={song.photo} imgAlt={song.name} /> */}
              </div>
              <div>
                <p> {song.name} </p>
              </div>
            </div>
          </Link>
          )
         
        })

      }, [songs])
   return (
   
     <div className="device device-iphone-x">
       <div className="device-frame">
         <div className="device-content">
           <div className={classes.row}>

             <div className={classes.column50}>
               {songError ? <h2>Ошибка загрузки!</h2> : ""}
               {/* <h1>CaverPage</h1> */}
                {singContent}
              
             </div>
             {/* <Player songs={songs} /> */}
             </div>
           
           <Link to="/"><button className={classes.btnHome}>HOME</button></Link>

         </div>
       </div>
       <div className="device-stripe"></div>
       <div className="device-header">
         <div className="device-sensors"></div>
       </div>
       <div className="device-btns"></div>
       <div className="device-power"></div>
     </div>
     
   )
}
