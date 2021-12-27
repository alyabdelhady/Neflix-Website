import { useState, useEffect } from "react";
import { imageUrl } from "./../Constants/Constants";
import Link from "next/link";
import styles from "./Original.module.css";

function Original(props) {
  const [movie, setMovie] = useState(props.data);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(11);

  const slideMovie = movie.slice(index1, index2);

  const sliderSize = () => {
    if (window.innerWidth <= 960) {
      setIndex2(4);
    } else {
      setIndex2(11);
    }
  };

  useEffect(() => {
    sliderSize();
    window.addEventListener("resize", sliderSize);
  }, []);

  const handleNext = () => {
    if (index2 > movie.length - 1) {
      return null;
    } else {
      return setIndex1(index1 + 3), setIndex2(index2 + 3);
    }
  };

  const handlePrev = () => {
    if (index1 <= 1) {
      return null;
    } else {
      return setIndex1(index1 - 3), setIndex2(index2 - 3);
    }
  };

  return (
    <div className={styles.parent_original}>
      <h2 className={styles.title}>Original Movies</h2>
      <div className={styles.original_movie}>
        <button className={styles.prev_button} onClick={handlePrev}>
          <span className="carousel-control-prev-icon "></span>
        </button>

        {slideMovie.map((item) => (
          <div key={item.id}>
            <Link href={`/movies/${item.id}`}>
                <img src={`${imageUrl}${item.poster_path}`} alt="" />
            </Link>
          </div>
        ))}

        <button className={styles.next_button} onClick={handleNext}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Original;
