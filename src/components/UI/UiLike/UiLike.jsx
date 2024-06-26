import PropTypes from "prop-types";

import styles from "./UiLike.module.scss";

import { useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../store/favoriteSlice/favoriteSlice";

const UiLike = ({ id, isActive, setIsActive }) => {
  const dispatch = useDispatch();

  const dispatchFavorite = () => {
    if (isActive) {
      setIsActive(false);
      dispatch(removeFromFavorite(id));
    } else {
      setIsActive(true);
      dispatch(addToFavorite(id));
    }
  };

  return (
    <>
      <button onClick={dispatchFavorite} className={styles.UiLike__like}>
        <svg
          viewBox="0 0 26 26"
          fill={isActive ? "#FF0000" : "222222"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 26L11.115 24.1297C4.42 17.5128 0 13.1346 0 7.79292C0 3.41471 3.146 0 7.15 0C9.412 0 11.583 1.14768 13 2.94714C14.417 1.14768 16.588 0 18.85 0C22.854 0 26 3.41471 26 7.79292C26 13.1346 21.58 17.5128 14.885 24.1297L13 26Z" />
        </svg>
      </button>
    </>
  );
};

UiLike.propTypes = {
  id: PropTypes.number,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default UiLike;
