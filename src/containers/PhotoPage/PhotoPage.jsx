import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getApiResource } from "../../utils/network";

import styles from "./PhotoPage.module.scss";
import loadingImg from "../../img/loader.svg";
import UiLike from "../../components/UI/UiLike/UiLike";

const PhotoPage = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [url, setUrl] = useState();

  const [buttonActive, setButtonActive] = useState(
    Object.keys(useSelector((state) => state.favorite)).indexOf(id) !== -1
  );

  useEffect(() => {
    (async () => {
      const res = await getApiResource(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );

      if (res) {
        setTitle(res.title);
        setUrl(res.url);
      }
    })();
  }, []);

  return (
    <>
      <div>
        {title && url ? (
          <>
            <div className={styles.photoPage__container}>
              <UiLike
                buttonActive={buttonActive}
                setButtonActive={setButtonActive}
                id={id}
                title={title}
                url={url}
              />
              <img
                className={styles.photoPage__photo}
                src={url}
                alt={"Photo: " + title}
              />
              <h2 className={styles.photoPage__title}>{title}</h2>
            </div>
          </>
        ) : (
          <div>
            <img
              className={styles.loading__img}
              src={loadingImg}
              alt="loading"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoPage;
