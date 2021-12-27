import axios from "axios";
import { useState } from "react";
import { imageUrl } from "../../components/Constants/Constants";
import styles from "./../../styles/Details.module.css";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import TrailerVideo from "./../../components/TrailerVideo/TrailerVideo";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleDoubleRight, faStar } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Details({ data, trailer, similar }) {
  const [movie, setMovie] = useState(data);

  console.log(data.genres)

  return (
    <div className="bg-black">
      <div
        className={styles.movie_details}
        style={{
          backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
        }}
      >
        <div className={styles.movie_transperant}>
          <div className="container ">
            <div className="row">
              <div className={`${styles.details_img} col-lg-4 col-6`}>
                <img src={`${imageUrl}${movie.poster_path}`} alt="" />
              </div>
              <div className={`${styles.info} col-lg-8 col-6`} >
                <h2>{movie.title}</h2>
                <div className={styles.flex}>
                  <p> {movie.overview}</p>
                </div>

                <div className={styles.flex}>
                  <h6>Release date </h6>
                  <h5>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                  </h5>
                  <p>{movie.release_date}</p>
                </div>

                <div className={styles.flex}>
                  <h6>Language </h6>
                  <h5>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                  </h5>
                  <p>{movie.original_language}</p>
                </div>

                <div className={styles.flex}>
                  <h6>Rate </h6>
                  <h5>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                  </h5>
                  <p>
                    <FontAwesomeIcon className={styles.fa_star}  icon={faStar}></FontAwesomeIcon>

                    {movie.vote_average}
                    <FontAwesomeIcon className={styles.fa_star} icon={faStar}></FontAwesomeIcon>

                  </p>
                </div>
                <div className={styles.geners}>
                  {data.genres.map(gener => (
                    <h1 className={styles.gener} key={gener.id}>{gener.name}</h1>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrailerVideo trailer={trailer} />
      <SimilarMovies similar={similar} />
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const originalResult = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_networks=213"
  );

  const actionResult = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_genres=28"
  );

  const romanceResult = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_genres=10749"
  );
  const comedyResult = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_genres=35"
  );
  const horrorResult = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_genres=27"
  );
  const documentaryResult = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=aad7795cbcd9e9b03e57f734a26af4bb&with_genres=99"
  );

  const allMovies = [
    ...originalResult.data.results,
    ...actionResult.data.results,
    ...romanceResult.data.results,
    ...horrorResult.data.results,
    ...documentaryResult.data.results,
    ...comedyResult.data.results,
  ];
  const paths = allMovies.map((item) => {
    if (item.id == 129600 || item.id == 129600 || item.id == 132719 || item.id == 135864 || item.id == 66732 || item.id == 82596 || item.id == 93405) {
      return {
        params: { id: "63174" },
      };
    } else {
      return {
        params: { id: item.id.toString() },
      };
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context.params);
  const id = context.params.id;

  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=aad7795cbcd9e9b03e57f734a26af4bb`
  );

  const trailer = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=aad7795cbcd9e9b03e57f734a26af4bb`
  );

  const similar = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=aad7795cbcd9e9b03e57f734a26af4bb`
  );

  return {
    props: {
      data: result.data,
      trailer: trailer.data.results,
      similar: similar.data.results,
    },
  };
}
