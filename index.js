
const getFirstSelector = function (selector) {
    return document.querySelector(selector);
}
 const nestedTarget = function () {
   return document.querySelector('#nested .target');
 }

 const deepestChild = function () {
   const allDivs = document.querySelectorAll('#grand-node div')[-1];
   
 }
