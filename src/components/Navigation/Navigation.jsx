import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
