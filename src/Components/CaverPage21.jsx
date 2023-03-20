import React, { useContext, useEffect, useMemo, useState } from 'react'
import Papa from "papaparse";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from "./CaverPage.module.css"
import { Context } from './context'
import Player from './Player/Player';
import RoundLoader from './Loader/RoundLoader';
import Img from './UI/Img';

export const CaverPage21 = () => {
  const [data, setData] = useState({});
  const [songError, setSongError] = useState(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const urlParse21 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbZ-zv6Iw7YB8B8IYyayLqLPyJYxdBl9tJoNB93wUb6_FmCntCAoiHEWmPo8Ohpg4LjZCLhU68a3no/pub?output=csv";
  const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBQ847ey_0J68AbS-jSJD8LwtsxtFK3tbX5lSoNxhgqwKy6R9gz2ITVOJXzAT-IPkPoNIZBgPcrDC_/pub?output=csv";
  const urlParse23 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaefbfGA1Q4zWVefwHf12eADp2mAb7Qhmd6-9-ArkESh9RJTfo2R263YIIDYB4a5fB_d5aF0scmHY2/pub?output=csv";
  const urlLoc = location.pathname;
  // console.log(location.pathname)
  const urlParse = urlLoc.includes('cavers21') ? urlParse21 : urlLoc.includes('cavers22') ? urlParse22 : urlLoc.includes('cavers23') ? urlParse23 : "";
  // console.log(urlParse)
  useEffect(() => {
    Papa.parse(urlParse,
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data)
        },
        skipEmptyLines: true,
        error: (error) => {
          console.error(error);
          setSongError(true)
        }
      })
  }, [])
  // console.log(data)
  const songs = Array.from(data);
  const { sings, setSings } = useContext(Context);
  const singContent = useMemo(() => {
    if (songs.length === 0) {
      return <div className='loadBlock'><RoundLoader /></div>
    }
    return songs?.map((song, i) => {
      return (
        <Link key={i} to={`/cavers/${song.id}`} onClick={() => setSings(songs)}>
          <div className={classes.media}>
            <div className={classes.mediaImage}>
              {/* <img src={song.photo} width={100} alt={song.name} /> */}
              <Img imgUrl={song.photo} imgAlt={song.name} />
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
              {singContent}
            </div>
            <Player songs={songs} />
          </div>
          <Link to="/"><button className={classes.btnHome}>Главная</button></Link>
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
