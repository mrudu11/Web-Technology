/**Activity 
 * 1 diff bet array function and simple function 
 * 2 write a code for array function with 2 examples
 * 3 switch case 
 * 4 how to use truthy and falsy in js
 * 5 how to use ternary operators in js
 * 6 type a code how to use loops in array while ,for ,do while ,for in ,for of ,for each
 * 7 diff bet for of and for in loop
 * 8 how to use map and filter function in js
 * 9 how to use reduce method in js
 * 10 this keyword diff in simple and array function
 */

//Activity 1=>
    //  ....1...
    console.log("when we use \"this\" keyword in simple function => Global object and array function  =>  {} empty object")
    function stuName() {
    let student = "mrudula";
    console.log(this);   
    }
    stuName();

    let fName = () => {
        let student = "mrudula";
        console.log(this);   
    }
    fName();
   
    
    // ...2...
    console.log("when we use \"this.student\" keyword in simple=>undefined and array function =>value (mrudula)")
    function stu() {
    let student = "mrudula";
    console.log(this.student); 
    }
    stu();

    let mName = () => {
        this.student3 = "Rajendra";
        console.log(this.student3); // undefined
    }
    mName();

    //...3...
    console.log("when we use student then it will gives value in both")
    function stu1(student) {
    student = "mrudula";
    console.log(student);
    }
    stu1();

    let lName = () => {
        let student = "waghmode";
        console.log(student);
    }
    lName();


//Activity 2
const add=(n1,n2)=>{
    return n1+n2;
}
console.log("addition : "+ add(10,20));
const sub=(n1,n2)=>{
    return n1-n2;
}
console.log("substraction : "+ sub(30,20));

//Activity 3
let num3 = 3;

switch (num3) {
    case 1:
        console.log("num is 1");
        break;
    case 2:
        console.log("num is 2");
        break;
    case 3:
        console.log("num is 3");
        break;
    default:
        console.log("wrong choice");
}

//Activity 4


//Activity 5
let num4 = 3
if(num4<5? console.log("less than 5"):console.log("greater than 5"));


//Activity 6
//for loop
let arr =[1,2,3]
for(let i=0;i<arr.length;i++){      
     console.log(+arr[i]);
}

//while
let num1=10
while(num1<13){
    console.log(num1++);
}

//do while
let num2= 20
do{
     console.log(num2++);
}while(num2<23)

//for of
console.log("for of use to display string");
let arr1=["mrudula","samruddhi","sakshi"]
for(let i of arr1){
    console.log(i);
}

//for in 
console.log("for in use to display object")
let student={
    name:"mrudula",
    prn : 137,
    city : "hatkanangale"
}
for(let stu in student){
    console.log(stu +":"+student[stu]);
}


//forEach loop
let city = ["kagal","kolhapur","hatkanangale"]
city.forEach(element => {
    console.log(element);
});

// Activity 7 diff bet for of and for in loop
/**for in =>  in array gives index number
 * mostly used for objects
 * can access value using : object[key]
 * not used for array value iteration
 
 * for of => used with string, arrays, maps ,sets
    best for iteration array elements
 */

    










