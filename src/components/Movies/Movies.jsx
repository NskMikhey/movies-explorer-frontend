import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {SearchForm} from "./SearchForm/SearchForm";
import {MoviesCardList} from "./MoviesCardList/MoviesCardList";
import {movieCardList} from "../../utils/data";
import {useContext, useEffect, useState} from "react";
import {WindowModeContext} from "../../contexts/WindowModeContext";
import {visibleMovieCards} from "../../utils/config";

export function Movies() {
  const [isMoreButtonPresent, setIsMoreButtonPresent] = useState(false);
  const [visibleCount, setVisibleCount] = useState(visibleMovieCards.desktop.initCount);
  const screenType = useContext(WindowModeContext);
  const totalMovies = movieCardList.length;

  const handleShowMore = () => {
    const currentCount = visibleCount;
    const screenSizeConfig = visibleMovieCards[screenType];
    const haveMoreCards = (currentCount + screenSizeConfig.moreCount) <= totalMovies
    if ((currentCount < totalMovies) && haveMoreCards) {
      setVisibleCount(currentCount + screenSizeConfig.moreCount);
    } else if (currentCount < totalMovies) {
      setVisibleCount(currentCount + screenSizeConfig.moreCount);
      setIsMoreButtonPresent(false);
    } else {
      setVisibleCount(totalMovies);
      setIsMoreButtonPresent(false);
    }
  };

  useEffect(() => {
    if (totalMovies > visibleMovieCards[screenType].initCount) {
      setIsMoreButtonPresent(true);
    }
    setVisibleCount(visibleMovieCards[screenType].initCount);
  }, [screenType])

  return (
    <>
      <Header/>
      <main className="page__main page__main_type_movies">
        <SearchForm/>
        <MoviesCardList
          movieCardList={movieCardList.slice(0, visibleCount)}
          onMore={handleShowMore}
          isMoreButtonPresent={isMoreButtonPresent}/>
      </main>
      <Footer/>
    </>
  )
}