// map, filter, arrow fns

// //arrow functions
// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };

// app.get("/", (req, res) => {

// });

// app.get("/", function (req, res) {

// });
// const ans = sum(1, 2);
// console.log(ans);

//map function
// //given a array, give me back a new array in which every value is multiplied by 2
// // i/p -> [1, 2, 3, 4]
// // o/p -> [2, 4, 6, 8]

// const input = [1, 2, 3, 4];

// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }
// console.log(newArray);

// using map fnc

// function transform(i) {
//   return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);

// //or
// const ans = input.map(function (i) {
//   return i * 2;
// });
// console.log(ans);

//filter function
//given an input array, give me all even values from it

// const arr = [1, 2, 3, 4, 5];

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// //using filter function

// function filterLogic(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ans = arr.filter(filterLogic);
// console.log(ans);

const ans = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
  