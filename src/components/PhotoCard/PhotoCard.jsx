import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./PhotoCard.module.scss";

import UiLike from "../UI/UiLike/UiLike";

const PhotoCard = ({ id, title, url, isActive }) => {
  const [buttonActive, setButtonActive] = useState(isActive);

  return (
    <div className={styles.photoCard__container}>
      <UiLike
        buttonActive={buttonActive}
        setButtonActive={setButtonActive}
        id={id}
        title={title}
        url={url}
      />
      <Link to={`/photo/${id}`}>
        <img className={styles.photoCard__photo} src={url} alt="Image" />
        <h2 className={styles.photoCard__title}>{title}</h2>
      </Link>
    </div>
  );
};
PhotoCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  isActive: PropTypes.bool,
};

export default PhotoCard;
