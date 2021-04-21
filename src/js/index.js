import '../css/common.css'
import '../css/style.css'
function $ (node) {
    return document.querySelector(node)
}
function $$ (node) {
    return document.querySelectorAll(node)
}

// import nav from './nav.js';
import Carousel from './carousel.js';
import RecommendMusic from './recommend.js';
import NewMusic from './new.js';
// import officialTop from './officialTop.js';

window.onload = function () {
    // nav($$('.menu a'))
    new Carousel($('.carousel'))
    new RecommendMusic($('.recommend'))
    new NewMusic($('.new'))
    // new officialTop($('.official-top'))
}
