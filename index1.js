// //sum of 2 numbers
// function sum(a,b){
//     return a + b;
// }
// let ans= sum(4,6);
// console.log(ans);

// //sum of first n numbers
// function sum(n){
//     let ans = 0;
//     for(let i=0; i<=n; i++){
//         ans= ans+i;
//     }
//     return ans;
// }
// const ans = sum(10);
// console.log(ans);

// //other way
// function sum(n){
//     return n*(n+1)/2;
// }
// const ans = sum(10);
// console.log(ans);

// //synchronous code eg
// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);
// const fs = require("fs");

// const contents1 = fs.readFileSync("a.txt", "utf-8");
// console.log(contents1);
// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// const fs = require("fs");
// function print(err, data){
//     if(err){
//         console.log("File not found!");
//     }else{
//         console.log(data);
//     }
// }
// fs.readFile("a.txt", "utf-8", print);
// console.log("done");

// function timeout(){
//     console.log("Click the Button");
// }
// console.log("Hi");
// setTimeout(timeout, 15000);
// console.log("Welcome to loupe");
// let c=0;
// for(let i = 0; i<1000; i++)
//     c+=1;
// console.log("Expensive Operation Done");

// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`); // or use console.log("color is");console.log(this.color);
//     }
// }
// const rect = new Rectangle (2, 4, "red and blue");
// const area = rect.area();
// console.log(area);
// rect.paint();

// const date = new Date();
// console.log(date);
// console.log(date.getDay);
// console.log(date.getMonth);
// console.log(date.getFullYear);

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// function callback() {
//   console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback);

// function waitFor3S(resolve) {
//   setTimeout(resolve, 3000);
// }
// function main(){
//   console.log("main is called");
// }
// waitFor3S(main);

// function waitFor3S(resolve) {
//   setTimeout(resolve, 3000);
// }
// function setTimeoutPromisified() {
//   return new Promise(waitFor3S);
// }
// function main() {
//   console.log("main is called");
// }
// setTimeoutPromisified().then(main);

// function random(resolve) {
//   setTimeout (resolve, 3000);
// }
// let p = new Promise(random);
// function callback() {
//   console.log("promise succeded");
// }
// p.then(callback);
// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");
//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

// function step3Done() {
//   console.log("hello there");
// }

// function step2Done() {
//   console.log("hello");
//   setTimeout(step3Done, 5000);
// }

// function step1Done() {
//   console.log("hi");
//   setTimeout(step2Done, 3000);
// }

// setTimeout(step1Done, 1000);

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });
// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }
// function callback(){
//     console.log('1 sec has passed');
// }
// setTimeoutPromisified(1000).then(callback);
