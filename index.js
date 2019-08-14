
const getFirstSelector = function (selector) {
    return document.querySelector(selector);
}
 const nestedTarget = function () {
   return document.querySelector('#nested .target');
 }

 const deepestChild = function () {
   const everyDiv = document.querySelectorAll('#grand-node div');
   return everyDiv[everyDiv.length-1];
 }

const increaseRankBy = function (n) {
  const allRanks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < allRanks.length; i++) {
    allRanks[i].textContent = parseInt(allRanks[i].textContent) + n;
  }
}
