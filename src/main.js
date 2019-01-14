"use strict";

import "./assets/scss/firstScss.scss";
import testOptimizedImage from './assets/img/TCDD_train.png';

let es6test = () => {
  alert("compiled");

  setTimeout(() => {
    var titleElement = document.querySelector("#title");
    titleElement.innerHTML = "webpack-loader-test";
  }, 2000);
};

document.addEventListener(
  "DOMContentLoaded",
  function() {
    es6test();
  },
  false
);
