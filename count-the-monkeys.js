// function countthemonkeys(n){
// let newarray=[]
// for(let i=1;i<=n;i++)
//     {
//         newarray.push(i)
//     }
//     return newarray
// }

// console.log(countthemonkeys(10));



// const obj = {
//     name: "Rowan",
//     regularFunction: function () {
//         setTimeout(() => {
//             console.log(this); // يشير إلى `obj` وليس `window`
//         }, 3000);
//     }
// };

// obj.regularFunction();

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//     console.log(this); // يشير إلى `button`
// });

// setTimeout(() => console.log("هذا ينفذ بعد 3 ثواني"), 3000);

// let interval = setInterval(() => console.log("يظهر كل ثانيتين"), 2000);
// setTimeout(() => clearInterval(interval), 10000); // يوقف التكرار بعد 10 ثواني
// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("تم جلب البيانات"), 2000);
//     });
// }

// async function getData() {
//     let data = await fetchData();
//     console.log(data);
// }

// getData();



// const reverseString = str => str.split("").reverse().join("");
// console.log(reverseString("hello"));  // "olleh"
// console.log(reverseString("world"));  // "dlrow"
// console.log(reverseString("JavaScript"));  // "tpircSavaJ"
// console.log(reverseString("12345"));  // "54321"


// function reverseString(str) {
//     return str.split("").reverse().join("");  // تأكد من إرجاع النتيجة
// }

// console.log(reverseString("rawan"));  // يجب تمرير النص داخل علامات اقتباس

// const isPalindrome = str => str === str.split("").reverse().join("");
// console.log(isPalindrome("madam")); // true













// 1. الفرق بين Global Scope, Function Scope, Block Scope
// Global Scope: متغيرات ودوال متاحة في جميع أجزاء البرنامج.
// Function Scope: المتغيرات داخل دالة تكون متاحة فقط داخل هذه الدالة.
// Block Scope: المتغيرات داخل كتلة (مثل if أو for) تكون متاحة فقط داخل هذه الكتلة.
// مثال:

// javascript
// Copy
// Edit
// let globalVar = "متغير عام";

// function testScope() {
//     let functionVar = "متغير دالة";
//     if (true) {
//         let blockVar = "متغير كتلة";
//         console.log(blockVar);  // متغير كتلة
//     }
//     console.log(functionVar);  // متغير دالة
//     // console.log(blockVar); // خطأ: blockVar غير معرف هنا
// }

// testScope();
// console.log(globalVar);  // متغير عام









// . Lexical Scope
// الـ Lexical Scope يعني أن النطاق يتم تحديده بناءً على مكان تعريف الدالة في الكود، وليس مكان تنفيذها.

// 3. Closures
// الـ Closure هو دالة تمتلك حق الوصول إلى المتغيرات في النطاق المحيط بها، حتى لو تم تنفيذ الدالة في نطاق آخر.

// مثال:

// javascript
// Copy
// Edit
// function outer() {
//     let outerVar = "متغير خارجي";
//     return function inner() {
//         console.log(outerVar);  // متغير خارجي
//     };
// }

// let closureFunc = outer();
// closureFunc();  


// let fetchData = new Promise((resolve, reject) => {
//     let success = true; 

//     setTimeout(() => {
//         if (success) {
//             resolve("تم جلب البيانات! ✅");
//         } else {
//             reject("حدث خطأ! ❌");
//         }
//     }, 2000);
// });

// fetchData
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// async function getData() {
//     try {
//         let result = await fetchData;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData();


// console.log("قبل");

// setTimeout(() => {
//     console.log("داخل setTimeout");
// }, 0);

// console.log("بعد");



//  function reverse(str){
// return str.split("").reverse().join("")
//  }

//  console.log(reverse("rawan"));


// function Palindrome(str){
//  let reversed=str.split("").reverse().join("")
//  return str=== reversed
// }
// console.log(Palindrome("madam"));




// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }
// console.log(findMaxNumber([10, 25, 34, 12, 9])); // 34


// function fibonacci(n) {
//     let result = [0, 1]; // أول رقمين في السلسلة هما 0 و 1
    
//     for (let i = 2; i < n; i++) {
//         result[i] = result[i - 1] + result[i - 2]; // إضافة الرقمين السابقين
//     }
    
//     return result; // إرجاع السلسلة بعد حسابها
// }

// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]


// function fibonacci(n) {
// let result=[0, 1];
// for(let i=2;i < n; i++){
//     result[i]=result[i - 1] +result [i - 2]
// }
// return result;

// }

// console.log(fibonacci(5));


// function multiply(arr){

//   let double=  arr.map(num=>num*2)
//   return double

// }

// console.log(multiply([1, 2, 3, 4]));


// function sumEvenOdd(arr){
// let sumeven=arr.filter(num=>num%2===0).reduce((acc,num)=>num+acc,0)
// let sumeodd=arr.filter(num=>num%2 !==0).reduce((acc,num)=>num+acc,0)
// return { sumeven, sumeodd };
// }

// console.log(sumEvenOdd([1, 2, 3, 4, 5, 6])); // { evenSum: 12, oddSum: 9 }


