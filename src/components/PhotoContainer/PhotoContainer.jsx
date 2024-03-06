import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./PhotoContainer.module.scss";

import PhotoCard from "../PhotoCard/PhotoCard";
import loadingImg from "../../img/loader.svg";

const PhotoContainer = ({ photoInfo }) => {
  const favoriteData = Object.values(useSelector((state) => state.favorite));
  const currentPhotoInfo = !photoInfo ? favoriteData : photoInfo;

  const isActive = (id, index) => {
    if (!photoInfo) {
      return favoriteData[index].id === id;
    } else {
      return !!favoriteData[id];
    }
  };

  return (
    <div className={styles.photoContainer__container}>
      {currentPhotoInfo ? (
        currentPhotoInfo.map((photo, index) => (
          <PhotoCard
            key={Number(photo.id)}
            id={Number(photo.id)}
            title={photo.title}
            url={photo.url}
            isActive={isActive(Number(photo.id), index)}
          />
        ))
      ) : (
        <img className={styles.loading__img} src={loadingImg} alt="loading" />
      )}
    </div>
  );
};
PhotoContainer.propTypes = {
  photoInfo: PropTypes.array,
};

export default PhotoContainer;
