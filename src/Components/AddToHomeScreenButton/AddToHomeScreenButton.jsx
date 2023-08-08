import React, { useState, useEffect } from 'react'
import classes from "./AddToHomeScreenButton.module.css"
const AddToHomeScreenButton = () => {
  const [prompt, setPrompt] = useState(null)

  useEffect(() => {
    const handler = (event) => {
      setPrompt(event)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleAddToHomeScreenClick = () => {
    prompt.prompt()

    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('The app was added to the home screen')
      } else {
        console.log('The app was not added to the home screen')
      }
    })
  }

  return <button className={classes.btn} onClick={handleAddToHomeScreenClick}>Установить как приложение</button>
}

export default AddToHomeScreenButton