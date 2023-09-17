import {useContext} from "react";
import {movieCardList} from "../../utils/data";
import {visibleMovieCards} from "../../utils/config";
import {WindowModeContext} from "../../contexts/WindowModeContext";
import {Header} from "../Header/Header";
import {SearchForm} from "../Movies/SearchForm/SearchForm";
import {MoviesCardList} from "../Movies/MoviesCardList/MoviesCardList";
import {Footer} from "../Footer/Footer";

export function SavedMovies() {
  const screenType = useContext(WindowModeContext);
  const savedMoviesList = movieCardList.filter((movieCard) => movieCard.saved)

  return (
    <>
      <Header/>
      <main className="page__main page__main_type_movies">
        <SearchForm/>
        <MoviesCardList movieCardList={savedMoviesList.slice(0, visibleMovieCards[screenType].initCount)}
                        isMoreButtonPresent={false}/>
      </main>
      <Footer/>
    </>
  )
}