import Appbar from "./appbar/appbar";
import Search from "./search/Search";
import styles from "./app.module.css";
import Carousel from "./carousel/Carousel";
import Features from "./features/Features";
import Offers from "./offers/Offers";
import Filter from "./filter/Filter";
import List from "./list/List";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <div className={styles.app}>
      <Appbar />
      <Search />
      <Carousel />
      <Features />
      <Offers />
      <Filter />
      <List />
      <Navigation />
    </div>
  );
}

export default App;
