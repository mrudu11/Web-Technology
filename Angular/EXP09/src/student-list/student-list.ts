import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  constructor(private student: StudentService) {}
  students: any[] = [];

  ngOnInit() {
    this.students = this.student.getStudents();
  }
}
