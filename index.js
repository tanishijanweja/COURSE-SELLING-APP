// function sum(a, b){
//     let totalSum = a+b;
//     return totalSum
// }
// let sum1 =sum(1,2);
// let sum2 =sum(9,1);

// console.log(sum1);
// console.log(sum2);

// function canVote(age){
//     if (age >= 18 ){
//         return true;
//     }else{
//         return false;
//     }
// }

// let ans = canVote(18);
// console.log(ans);
// function canVote(age){
//     if (age >= 18) {
//         console.log("You are an adult.");
//     } else {
//         console.log("You are a minor.");
//     }
// }

// canVote(11);
// function checkEvenOrOdd(number) {
//     if (number % 2 == 0) {
//         console.log("Number is even");
//     } else {
//         console.log("Number is odd");
//     }
// }
// checkEvenOrOdd(800908);
// function sum(n) {
//     if (n < 1) {
//       return 0;
//     }else{
//         return (n * (n + 1)) / 2;
//     }  
   
//   }
  
//   const number = 10; 
//   console.log(`The sum from 1 to ${number} is: ${sum(number)}`);
// function greet(user){
//     console.log("Hi " + title + user.name + ", your age is " + user.age + canVote);
// }
// let user={
//     name: "xyz",
//     age: 2,
//     gender: "female"
// }
// let title;
// if(user.gender === 'male'){
//     title= "Mr.";
// }else if(user.gender === 'female'){
//     title= "Mrs.";
// }else{
//     title= "others";
// }
// let canVote;
// if (user.age>=18){
//     canVote= ", you are legal to vote";
// }else{
//     canVote=", you cannot vote";
// }

// greet(user);

// function filterEvenNumbers(numbers) {
//     return numbers.filter((num) => num % 2 === 0);
//   }
//   const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbers = filterEvenNumbers(inputArray);
//   console.log(evenNumbers); 

// function xyz(users) {
//     const pqr= [];
//     for(let i=0; i<users.length; i++){
//         if(users[i].age>=18 && users[i].gender ==='male'){
//             pqr.push(users[i]);
//         }
//     }
//     return pqr;

// }  
// const users =[{
//     name: "Tanishi",
//     age: 18,
//     gender: "female"
// },{
//     name: "Harkirat",
//     age: 12,
//     gender: "male"
// },{
//     name: "Raj",
//     age: 29,
//     gender: "male"
// },{
//     name: "Sam",
//     age: 18,
//     gender: "male"
// }];

// const pqr=xyz(users);
// console.log(pqr);