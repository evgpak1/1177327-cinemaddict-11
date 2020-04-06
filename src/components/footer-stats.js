import {getFilmsNum} from "./films-num.js";

export const getFooterStatsTemplate = () => (
  `<section class="footer__statistics">
    <p>${getFilmsNum()}</p>
  </section>`
);
