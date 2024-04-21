import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./PhotoCard.module.scss";

import UiLike from "../UI/UiLike/UiLike";
import { useSelector } from "react-redux";
import { useState } from "react";

const PhotoCard = ({ id, title, url, author, year, favorites = false }) => {
  const favoriteData = Object.values(useSelector((state) => state.favorite));
  const [isActive, setIsActive] = useState(favoriteData.includes(id));

  if (favorites && !(favorites && isActive)) return null;
  return (
    <div className={styles.photoCard__container}>
      <UiLike id={id} isActive={isActive} setIsActive={setIsActive} />
      <Link to={`/photo/${id}`}>
        <img className={styles.photoCard__photo} src={url} alt="Image" />
        <h2 className={styles.photoCard__title}>{title}</h2>
        <div className={styles.photoCard__info}>
          <h3 className={styles.photoCard__textInfo}>{author}</h3>
          <span className={styles.photoCard__textInfo}>{year}</span>
        </div>
      </Link>
    </div>
  );
};
PhotoCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
  favorites: PropTypes.bool,
};

export default PhotoCard;
