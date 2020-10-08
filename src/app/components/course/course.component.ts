import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template: `
      <h1>{{"Title: " + getTitle()}}</h1>
      <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
      </ul>
      `
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  courses;
  constructor(service:CoursesService) {
      this.courses = service.getCourse();
   }

  ngOnInit(): void {
  }
  

 

  getTitle() {
    return this.title;
  }

}
