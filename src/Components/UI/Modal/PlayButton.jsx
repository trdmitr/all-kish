import React from 'react'
import cl from './MyModal.module.css'

const PlayButton = ( {children, ...props}) => {
    return (
      <button { ...props} className= {cl.playBtn}><i className="fa-play-circle" aria-hidden="true"></i>{children} </button>
      // <button { ...props} className= {classes.myBtn}><i className="fa fa-backward" aria-hidden="true"></i>{children}</button>
    )
}

export default PlayButton