import { useState } from "react";
import styles from "./TrailerVideo.module.css";
import YouTube from "react-youtube";

function TrailerVideo(props) {
  const [trailer, setTrailer] = useState(props.trailer);
  const one=()=>{if (trailer.length>0) {
    return trailer[0].key
  }else{
    return null
  }}
  console.log(trailer)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles.show_trailer}>
      <YouTube opts={opts} videoId={one()} />
    </div>
  );
}

export default TrailerVideo;
