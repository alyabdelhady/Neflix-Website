import { useState } from "react";
import styles from "./SimilarMovies.module.css";
import { imageUrl } from "./../Constants/Constants";

function SimilarMovies(props) {
  const [similarMovies, setSimilarMovies] = useState(props.similar);

  const slider1 = similarMovies.slice(0, 4);
  const slider2 = similarMovies.slice(4, 8);
  const slider3 = similarMovies.slice(8, 12);
  const slider4 = similarMovies.slice(12, 16);
  const slider5 = similarMovies.slice(16, 20);

  return (
    <div className={`${ styles.similar_movies } container`}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className={`${styles.indicators} carousel-indicators`}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 1"
          ></button>
        </div>
        <div className={`${styles.carousel_inner} carousel-inner`}>
          <h2>Similar Movies</h2>
          <div className="carousel-item active">
            <div className={styles.section_similar}>
              {slider1.map((item) => (
                <div className={styles.card} key={item.id}>
                  <img
                    src={imageUrl + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-item ">
            <div className={styles.section_similar}>
              {slider2.map((item) => (
                <div className={styles.card} key={item.id}>
                  <img
                    src={imageUrl + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-item ">
            <div className={styles.section_similar}>
              {slider3.map((item) => (
                <div className={styles.card} key={item.id}>
                  <img
                    src={imageUrl + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-item ">
            <div className={styles.section_similar}>
              {slider4.map((item) => (
                <div className={styles.card} key={item.id}>
                  <img
                    src={imageUrl + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-item ">
            <div className={styles.section_similar}>
              {slider5.map((item) => (
                <div className={styles.card} key={item.id}>
                  <img
                    src={imageUrl + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className={"card-title"}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className={`${styles.control_prev} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className={`${styles.prev_icon} carousel-control-prev-icon`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`${styles.control_next} carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className={`${styles.next_icon} carousel-control-next-icon`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SimilarMovies;
