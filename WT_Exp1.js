const accountemail = "hc@gmail.com"
// accountemail = "hb@gmail.com"
// console.log(accountemail);
// const a= 10

/*scope of variables
var take updated value beyond the scope*/
var b = 20
let a = 100

{
    let a = 200;
    var b = 300;
    document.write(a + "<br>");
    document.write(b + "<br>");
}
document.write(a + "<br>");
document.write(b + "<br>");

/*variable declaration */ 
let studentid = 10   //number
let studentname = "riya"        //string
let isstudent = true        //boolean
let student;            //undefined
let studentcourse = null      //null 
let BigIntNum = 1234567890123456789012345n   //big int

/* typeof use to check datatype 
    null as datatype object

    to print on browser we use document.write 
    to print on console we use console.log
*/
document.write(studentid + "<br>");
document.write(studentname + "<br>");
document.write(isstudent + "<br>");
document.write(student + "<br>");
document.write(studentcourse + "<br>");
document.write(BigIntNum + "<br>");
document.write(typeof(BigIntNum) + "<br>");
document.write(typeof(studentcourse) + "<br>");

/* 
Experiment No 1 =>
        1 even odd 2 display student info name email roll no 3 no using loop 4 student result 
*/

let num1 = 10
let num2 = 20

if(num1 == num2)
{
    document.write("values are equal<br>");
}
else{
    document.write("values are not equal<br>");
}

// Activity 1 :even odd

let n1 = 12

if((n1 % 2) == 0)
{
    document.write("number is even<br>");
}
else{
    document.write("number is odd<br>");
}

//Activity 2 :display student info name email roll no

let stuName = "rohan"
let stuEmail = "rohan@gmail.com"
let stuRollNo = 137

document.write(stuName + "<br>");
document.write(stuEmail + "<br>");
document.write(stuRollNo + "<br>");

//Activity 3 :display no using loop

//for loop
let num
for(num = 10; num < 20; num++)
{
    document.write(num + "<br>");
}
//while loop
let num3 = 1
while(num3 < 10)
{
    document.write(num3++ + "<br>");
}

// Activity 4 :student result

let marks = 25
if(marks > 35)
{
    document.write("student is pass<br>");
}
else
{
    document.write("student is fail<br>");
}
