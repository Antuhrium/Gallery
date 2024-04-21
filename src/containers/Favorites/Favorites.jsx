import { useSelector } from "react-redux";
import styles from "./Favorites.module.scss";

import PhotoContainer from "../../components/PhotoContainer/PhotoContainer";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoriteData = Object.values(useSelector((state) => state.favorite));

  return (
    <div className={styles.favorite__container}>
      {favoriteData.length ? (
        <PhotoContainer favorites={true} />
      ) : (
        <p className={styles.favorite__text}>
          You don't have favorite paintings..
          <span>
            Add them from the <Link to={`/`}>gallery</Link>
          </span>
        </p>
      )}
    </div>
  );
};

export default Favorites;
