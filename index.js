
const getFirstSelector = function (selector) {
    return document.querySelector(selector);
}
 const nestedTarget = function () {
   return document.querySelector('#nested .target');
 }

 const deepestChild = function () {
   const everyDiv = document.querySelectorAll('#grand-node div')[-1];
   return everyDiv[everyDiv.length-1];
 }
