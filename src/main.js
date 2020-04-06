import {getProfileTemplate} from "./components/profile.js";
import {getMenuTemplate} from "./components/menu.js";
import {getSortingTemplate} from "./components/sorting.js";
import {getFilmsTemplate} from "./components/films.js";
import {getFilmCardTemplate} from "./components/film-card.js";
import {getShowMoreButtonTemplate} from "./components/show-more-button.js";
import {getTopRatedTemplate} from "./components/top-rated.js";
import {getMostCommentedTemplate} from "./components/most-commented.js";
import {getFooterStatsTemplate} from "./components/footer-stats.js";
import {render} from "./components/functions.js";

const ALL_MOVIES_NUM = 5;
const EXTRA_FILMS_NUM = 2;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);

render(headerElement, getProfileTemplate());
render(mainElement, getMenuTemplate());
render(mainElement, getSortingTemplate());
render(mainElement, getFilmsTemplate());

const filmsElement = document.querySelector(`.films`);

/**
 * Отрисовка фильмов в верхней части
 */

const filmListElement = filmsElement.querySelector(`.films-list`);
const filmsContainerElement = filmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < ALL_MOVIES_NUM; i++) {
  render(filmsContainerElement, getFilmCardTemplate());
}

render(filmListElement, getShowMoreButtonTemplate());

/**
 * Отрисовка элементов Top Rated и Most Commented
 */

render(filmsElement, getTopRatedTemplate());
render(filmsElement, getMostCommentedTemplate());

const extraFilmsElements = filmsElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < extraFilmsElements.length; i++) {
  let filmContainer = extraFilmsElements[i].querySelector(`.films-list__container`);
  for (let j = 0; j < EXTRA_FILMS_NUM; j++) {
    render(filmContainer, getFilmCardTemplate());
  }
}

/**
 * Отрисовка футера
 */

const footerStatsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatsElement, getFooterStatsTemplate());
