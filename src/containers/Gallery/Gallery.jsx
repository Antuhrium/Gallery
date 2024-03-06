import { useState, useEffect } from "react";

import { getApiResource } from "../../utils/network";
import PhotoContainer from "../../components/PhotoContainer/PhotoContainer";

const Gallery = () => {
  const [photoInfo, setPhotoInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(
        `https://jsonplaceholder.typicode.com/photos?albumId=1`
      );

      if (res) {
        setPhotoInfo(res);
      }
    })();
  }, []);

  return (
    <>
      <PhotoContainer photoInfo={photoInfo} />
    </>
  );
};

export default Gallery;
