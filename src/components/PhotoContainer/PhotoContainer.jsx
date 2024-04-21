import PropTypes from "prop-types";

import styles from "./PhotoContainer.module.scss";
import paintingApi from "../../paintingApi";

import PhotoCard from "../PhotoCard/PhotoCard";
import loadingImg from "../../img/loader.svg";

const PhotoContainer = ({ favorites }) => {
  return (
    <div className={styles.photoContainer__container}>
      {paintingApi ? (
        paintingApi.map((photo) => (
          <PhotoCard
            favorites={favorites}
            key={Number(photo.id)}
            id={Number(photo.id)}
            title={photo.title}
            author={photo.author}
            year={photo.year}
            url={photo.url}
          />
        ))
      ) : (
        <img className={styles.loading__img} src={loadingImg} alt="loading" />
      )}
    </div>
  );
};
PhotoCard.propTypes = {
  favorites: PropTypes.bool,
};

export default PhotoContainer;
