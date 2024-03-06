import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles/index.module.scss";

import Navigation from "./components/Navigation/Navigation";
import Gallery from "./containers/Gallery/Gallery";
import Favorites from "./containers/Favorites/Favorites";
import NotFound from "./containers/NotFound/NotFound";
import PhotoPage from "./containers/PhotoPage/PhotoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/photo/:id" element={<PhotoPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
