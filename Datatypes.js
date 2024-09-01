//****************************DATA TYPE************************************************
// Number
let age=21;
let height=5.1;
console.log(age,height);
//string
let fullName="bisma rehman";
let department= "computer science";
console.log(fullName,department);
//Boolen
let pass=true;
console.log(pass);
//undefined
let x;
console.log(x);
//null
let y = "";
console.log(y);
//object non-primitive
console.log(typeof 20)

//**************************************coversion****************************************
//covert string to number
let  num = "bisma";//null, undefined,true,bisma
//let  num = "66";

console.log(typeof (num));
let valueInNumber = Number(num);
console.log(typeof num);
console.log(valueInNumber);

//***********************************OPERATION********************************************
let value = 44;
//value = -value;
//value += value;
//++value;
value++;
console.log(value);

//combination of two strings
let str1 = "bisma";
let str2 = "rehman";
let str3 = str1 + str2;
console.log(str3);
//combination of string and number
console.log("bisma" + 1 + 2);
console.log(1+2+"rehman")
console.log(1 + 2 * 5)