/**Activity 1 array object function declaration 
 * 2 write a code for reverse no 
 * 3 check pallindrome no
 * 4 febonacci series
 * 5 find larges element in array
 * 6 remove duplicate element in array
 * 7 find missing no in array
 * 8 1 string => reverse string 
 * 9 count vowels in string 
 * 10 check pallindrone in string
 * 11 checke prime no
 * 12 check factorial no
 * 12 function write a code for even odd no
 * 13 write a code for sum of array
 */


/**Activity 1 */
function Arith(a,b){        //function declarion 
    return a*b;
}
console.log("a * b ="+Arith(5,3));

let Student = {                     //object declaration
    name:"Mrudula",
    email:"mrudula@gmail.com",
    prn : 137
}
console.log("student name :"+Student.name);
console.log("student email = "+Student.email);
console.log("student prn ="+Student.prn);

const num = [1,2,3]         //array declaration
console.log("number array ="+num);

/*Activity 2 */
let num3 =278;
let temp1=num3;
let reverse1=0;

while(num3>0){
    let digit1 = num3 % 10;
    reverse1 = reverse1*10 + digit1;
    num3 = Math.floor(num3 /10);
}
console.log("reverse number is " +reverse1);


/* Activity 3 */
let num1 =121;
let temp=num1;
let reverse=0;

while(num1>0){
    let digit = num1 % 10;
    reverse = reverse*10 + digit;
    num1 = Math.floor(num1 /10);
}

if(temp==reverse){
    console.log("Pallindrome number: "+temp);
}
else{
    console.log("NOt a Pallindrome number: "+temp);
}

/**Activity 4 */
let n = 10;
let a = 0, b = 1;
console.log("Fibonacci series of  " +n+" :")
for (let i = 0; i < n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}

/*Activity 5*/
let number =Math.max(1,2,3,25,89)
console.log("max number is " +number);

/**Activity 6 */
let number1 = [1,2,3,1];
let unique = [];
for(let i =0;i<number1.length;i++){
    if(!unique.includes(number1[i]))
    {
        unique.push(number1[i]);
    }
}
console.log("unique array = "+unique);

/**Activity 7 */
let arr = [10,11,13,14];
let n1 = 14;

for (let i = 10; i <= n1; i++) {
    if (!arr.includes(i)) {
        console.log("Missing number is :"+ i);
    }
}

/**Activity 8 */
let name = "137"
let rev = name.split("").reverse().join("");
console.log("reverse string is " +rev);

/**Activity 9 */
let vowels ="a,e,i,o,u,A,E,I,O,U";
let name1 = "KartIki";
let fvowels = [];

for(let ch of name1){
    if(vowels.includes(ch))
    {
        fvowels.push(ch);
    }
}
console.log("vowels present in string ="+fvowels);

/**Activity 10 */
let name2 ="Level";
name2 = name2.toLowerCase();
let revString = name2.split("").reverse().join("");
if(name2==revString){
    console.log("string is pallindrome");
}
else
{
    console.log("string is not pallindrome");
}

/**Activity 11 */
let n3 = 55;
let isPrime = true;

if (n3 <= 1) {
    isPrime = false;
}

for (let i = 2; i <= n3 / 2; i++) {
    if (n3 % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(n3 + " is a Prime number");
} else {
    console.log(n3 + " is NOT a Prime number");
}

/**Activity 12 */
let n4 =6;
let fact = 1;
for(let i =1;i<=n4;i++){
    fact = fact * i;
}
console.log("factorial of " +n4+ " is "+fact);

/**Activity 13 */
function EvenOdd(a){
    if((a%2)==0){
        console.log("number is even"+a);
    }
    else{
        console.log(a+" : number is odd");
    }
}
let n2 = EvenOdd(155);

/**Activity 14 */
let sumArr = [1,2,3,4,5,6];
let sum =0;
for(let i=0;i<sumArr.length;i++){
    sum = sum + sumArr[i];
}
console.log("sum of array is " +sum);









