import { Component } from '@angular/core';
import { StarChangedEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: '',
    isStar: true
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = "Updated";  
  }

  courses;
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '},
    ]
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }

  onStarChanged(eventArgs: StarChangedEventArgs){
    console.log('star changed', eventArgs)
  }
}
