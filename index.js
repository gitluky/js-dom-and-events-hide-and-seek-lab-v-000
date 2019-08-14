
const getFirstSelector = function (selector) {
    return document.querySelector(selector);
}
 const nestedTarget = function () {
   const nested = document.getElementById('nested');
   return nested.getElementsByClassName('target');
 }
