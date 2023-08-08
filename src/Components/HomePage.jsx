import React from 'react'
import classes from "./components.module.css"
import { Link } from 'react-router-dom';
import AddToHomeScreenButton from './AddToHomeScreenButton/AddToHomeScreenButton'
export const HomePage = () => {
    const imgUrl = "https://sun9-8.userapi.com/impg/izS9kaCmwq9r2xT2aLPTrsIwwCeLLrJi7WDtXg/mHyZNkck3wY.jpg?size=589x779&quality=96&sign=211cbc50d369ce10cb3b9f5e978a037b&type=album"
    const imgAlt = "Каверы Подземки"
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1U3M7aGhmpFQHd3SNNupwghkrQagbRKq2";
    const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    const yearTrib21 = 21;
    const yearTrib22 = 22;
    const yearTrib23 = 23;
  return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      <span className={classes.navLink}>Каверы КИШ за всё время! Выходу сериала и 50-летию Горшка посвящается!</span>
                      {/* <Link to={"/cavers21"} className={classes.navLink21}
                      onClick={() => {  handleClick(imgAlt);console.log('Клик!', value); }}                 
                    >2021</Link> */}
                     <Link to={`/cavers${yearTrib21}`} className={classes.navLink21}>2021</Link>
                      <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link>
                      <div className={classes.main}>
                      
                          {/* <div className={classes.article}><p >Вот и всё что было...</p></div> */}
                          <div className={classes.article}><img src={imgUrl} width={100} alt={imgAlt} /></div>
                          {/* <div className={classes.article}><audio controls src={frontAudio} type="audio/mpeg" /></div> */}
                            <AddToHomeScreenButton/>
                          <div className={classes.article}><img src={imgTzi} width={100} alt="Каверы Подземки" /> </div>
                      </div>
                  </div>
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
