import { $, $$ } from './_utilities';
const articles = $$('.blog article');
const lab = $('.lab .wrapper');

const twoFirst = articles.slice(0, 2);
const threeNext = articles.slice(2, 5);
const twoLast = articles.slice(5, 7);

const wrapTwoFirst = document.createNode('div');

wrapTwoFirst.appendChild(twoFirst);

lab.appendChild(wrapTwoFirst);

// const wrap = (el, wrapper) => {
// 	el.parentNode.insertBefore(wrapper, el);
// 	wrapper.appendChild(el);
// };

// wrap(twoFirst, '<div class="twoFirst"></div>');
// wrap(threeNext, '<div class="threeNext"></div>');
// wrap(twoLast, '<div class="twoLast"></div>');
