import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import paintingApi from "../../paintingApi";

import styles from "./PhotoPage.module.scss";
import loadingImg from "../../img/loader.svg";
import UiLike from "../../components/UI/UiLike/UiLike";

const PhotoPage = () => {
  const { id } = useParams();
  const photoInfo = paintingApi[id - 1];

  const favoriteData = Object.values(useSelector((state) => state.favorite));
  const [isActive, setIsActive] = useState(favoriteData.includes(Number(id)));

  return (
    <div>
      {photoInfo.title && photoInfo.url ? (
        <div className={styles.photoPage__container}>
          <UiLike
            id={Number(id)}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <img
            className={styles.photoPage__photo}
            src={photoInfo.url}
            alt={"Photo: " + photoInfo.title}
          />
          <div className={styles.photoPage__info}>
            <h2 className={styles.photoPage__title}>
              Название: {photoInfo.title}
            </h2>
            <h3 className={styles.photoPage__info}>
              Автор: {photoInfo.author}
            </h3>
            <span className={styles.photoPage__info}>
              Год создания: {photoInfo.year}
            </span>
            <p className={styles.photoPage__info}>{photoInfo.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <img className={styles.loading__img} src={loadingImg} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default PhotoPage;
