'use strict';

const ALL_MOVIES_NUM = 5;
const EXTRA_FILMS_NUM = 2;

const getProfileTemplate = () => (
  `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

const getMenuTemplate = () => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

const getSortingTemplate = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);

const getFilmsTemplate = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`
);

const getFilmCardTemplate = () => (
  `<article class="film-card">
    <h3 class="film-card__title">The Dance of Life</h3>
    <p class="film-card__rating">8.3</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">Musical</span>
    </p>
    <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
    <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
    <a class="film-card__comments">5 comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`
);

const getShowMoreButtonTemplate = () => (
  `<button class="films-list__show-more">Show more</button>`
);

const getTopRatedTemplate = () => (
  `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>

    <div class="films-list__container"></div>
  </section>`
);

const getMostCommentedTemplate = () => (
  `<section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>

    <div class="films-list__container"></div>
  </section>`
);

const getFilmsNum = () => `130 291 movies inside`;

const getFooterStatsTemplate = () => (
  `<section class="footer__statistics">
    <p>${getFilmsNum()}</p>
  </section>`
);

const render = (container, template, position = `beforeend`) => {
  container.insertAdjacentHTML(position, template);
};

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
