import React, { useContext, useEffect, useMemo} from 'react'
import { useParams } from "react-router";
import classes from "./components.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from './context'
import ReactPlayer from 'react-player';
const SinglPage = (songs) => {
    const navigate = useNavigate();
    const params = useParams();
    const {sings, setSings} = useContext(Context);
    const tzitata = (imgLink) => {
        return (
          <div className={classes.tziTata}>
             {
            imgLink.includes('http') ? <img className={classes.tziTata} src={imgLink} width={80} alt="Цитаты" />
              : <p className={classes.tziTata}>{imgLink}</p>
          }
          </div>
        )
      }
      const audioSource = (linkAuidio, linkName) => {
        return (
          <div>
            <p>{linkName}</p>
            <audio controls className={linkAuidio ? '' : classes.mediaHidden}
              src={linkAuidio} type="audio/mpeg" />
          </div>
        )
      }
    
      const videoSource = (linkVideo, linkName) => {
        return (
            <div>
        <p>{linkName}</p>
        {linkVideo.includes('youtu.be') ? <ReactPlayer className={linkVideo ? '' : classes.mediaHidden.join(' ')} id={classes.videoFrame} url={linkVideo} controls={true} /> 
        :  <video className={[classes.videoBlock, linkVideo ? '' : classes.mediaHidden].join(' ')} src={linkVideo} controls={true} type="video/mp4" ></video>}
        </div>
        )
      }
    // if (sings.length <= 0) {
    //     return <h2>Load...</h2>
    //     } 
    console.log("sings: ", sings)
    

    //   sings.length ? 0 : 
      const currSings = sings.filter(sings => sings.id === params.id);
       
     
        
        console.log(currSings)
        const listContent = useMemo(() => {
            if (!currSings.length) {
        return <h2>Load...</h2>
        } 
            return currSings.map((currSing) =>
            <>
               <div className={classes.mediaSong} key={currSing.id}>
          <img className={classes.mediaImage_modal} src={currSing.photo} width={80} alt={currSing.name} />
          <div className={classes.headerSong}>
            <p>{currSing.name}</p></div>
          <a className={[classes.linkTo, currSing.linkTo ? '' : classes.mediaHidden].join(' ')} href={currSing.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
          <div className=
            {
              classes.audioBlock
            }>
            {audioSource(currSing.audio1, currSing.audio_name1)}
            {audioSource(currSing.audio2, currSing.audio_name2)}
            {audioSource(currSing.audio3, currSing.audio_name3)}
            {/* {audioSource(currSing.rezAudio2, currSing.rezAudio1)} */}
          </div>
          <div className=
            {
              classes.videoBlock
            }>
            {videoSource(currSing.video1, currSing.video_name1)}
            {videoSource(currSing.video2, currSing.video_name2)}
            {videoSource(currSing.video3, currSing.video_name3)}
          </div>
          {tzitata(currSing.picture)}  
          <Link to="/cavers21"><button className={classes.bTnSing}>Назад</button></Link>                    
        </div>
               
               </>
            );
        
          }, [currSings])
    return (
        <div className="device device-iphone-x">
        <div className="device-frame">
            <div className="device-content">
            {listContent}
              {/* <h1>SinglPage</h1>  */}
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

export default SinglPage