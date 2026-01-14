const accountemail = "hc@gmail.com"
// accountemail = "hb@gmail.com"
// console.log(accountemail);
// const a= 10



/*scope of variables
var take updated value beyond the scope*/
var b =20
let a =100

{
    let a =200;
    var b =300;
    document.write(a,b);
}
document.write(a,b);

/*varible declaration */ 
let studentid =10   //number
let studentname = "riya"        //string
let isstudent = true        //boolean
let student;            //undefined
let studentcourse=null      //null 
let BigInt =1234567890123456789012345n   //big int

/* typeof use to check datatype 
    null as datatype object

    to print on browser we use document.write 
    to print on console we use console.log
*/
document.write(studentid,studentname,isstudent,student,studentcourse,BigInt);
document.write(typeof(BigInt))
document.write(typeof(studentcourse))



/* 
Experiment No 1 =>
        1 even odd 2 display student info name email roll no 3 no using loop 4 student result 
*/


let num1 = 10
let num2 = 20

if(num1==num2)
{
    document.write("values are equal");
}
else{
    document.write(" values are not equal");
}

// Activity 1 :even odd

let n1 =12

if((n1%2)==0)
{
    document.write("number is even")
}
else{
    document.write("number is odd")
}

//Activity 2 :display student info name email roll no

let stuName = "rohan"
let stuEmail = "rohan@gmail.com"
let stuRollNo = 137

document.write(stuName,stuEmail,stuRollNo)
//Activity 3 :display no using loop

//for loop
let num
for(num = 10;num<20;num++)
{
    document.write(num);
}
//while loop
let num3=1
while(num3<10)
{
    document.write(num3++)
}



// Activity 4 :student result

let marks =25
if(marks>35)
{
    document.write("student is pass");
}
else
{
    document.write("student is fail");
}






