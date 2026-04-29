import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
   students = [
    {name:"mrudula" , age : 21 , course : "AIML"},
    {name:"vaishnavi",age:21,course:"AIDS"},
    {name: "Amruta" , age:21,course:"ENTC"}
   ]
   getStudents(){
    return this.students;
   }
  
}

