const after = document.querySelector(".after");
let addWinNumbers = document.querySelector(".addWinNumbersBtn");
let LastWinningNumbers = document.querySelector(".userinput");

const btnClear = document.querySelector(".btnclear");
const btnRun = document.querySelector(".btn");
let rowsCounter = document.querySelector(".input_rows");
const reloadBtnEl= document.querySelector(".reloadBtn")

let lottery = () => {
  let rndArrayNum = (arr) => {
    const rndNumber = Math.trunc(Math.random() * 6 + 1);
    const pastNum = arr[rndNumber];
    return pastNum;
  };

  // let insertWinNumbers = addWinNumbers.addEventListener("click", function () {
  // return LastWinningNumbers.value;
  // });
  //
  let arr = [];
  // arr.push(rndArrayNum([insertWinNumbers]));
  // arr.push(rndArrayNum([3, 6, 8, 13, 18, 27]));
  let additonalNumber = Math.trunc(Math.random() * 7 + 1);
  while (arr.length < 6) {
    let rndNum = Math.trunc(Math.random() * 37 + 1);
    if (!arr.includes(rndNum)) {
      arr.push(rndNum);
    }
  }

  return (
    arr.sort((a, b) => a - b).join("-") +
    " " +
    `Additonal Number: ${additonalNumber}`
  );
};

//

btnRun.addEventListener("click", () => {
  const numberOfRows = (number) => {
    let count = 0;
    while (count < number) {
      let html = `<div class="row">
<div class="card-header">${lottery()}</div>
</div>`;
      count++;
      after.insertAdjacentHTML("afterbegin", html);
    }
  };

  
  
  
  numberOfRows(rowsCounter.value);
});

// reload btn

reloadBtnEl.addEventListener("click", function () {
  location.reload();
})

// clear bottun
btnClear.addEventListener("click", function () {
  rowsCounter.value = LastWinningNumbers.value = "";
});








//
//////////////////////////original code ///////////////////////////////

// let lottery = () => {
// let rndArrayNum = (arr) => {
// const rndNumber = Math.trunc(Math.random() * 6 + 1);
// const pastNum = arr[rndNumber];
// return pastNum;
// };
//
// let arr = [];
// arr.push(rndArrayNum([3, 4, 9, 19, 22, 26]));
// let additonalNumber = Math.trunc(Math.random() * 7 + 1);
// while (arr.length < 6) {
// let rndNum = Math.trunc(Math.random() * 37 + 1);
// if (!arr.includes(rndNum)) {
// arr.push(rndNum);
// }
// }
// return (
// arr.sort((a, b) => a - b).join("-") +
// " " +
// `Additonal Number: ${additonalNumber}`
// );
// };
//
// const numberOfRows = (number) => {
// let count = 0;
// while (count < number) {
// console.log(lottery());
// count++;
// }
// };
// numberOfRows(2);
//
