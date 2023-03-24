import React from 'react';
import { useEffect, useState  } from "react"
// import Loader from "./UI/Loader/Loader";
import RoundLoader from "../Loader/RoundLoader";

const Img = ({imgUrl, imgAlt}) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    // console.log (imgUrl)
    fetch(imgUrl)
      .then(response => response.blob())
      .then((image) => {
        setUrl(URL.createObjectURL(image));
      });
    }, [imgUrl])
  
  if (!url) {
    return <RoundLoader/>;
  }
      
  return <img src = {url} alt={imgAlt}/>;
}
export default Img