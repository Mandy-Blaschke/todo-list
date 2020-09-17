import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks = ['Milch'];
  newTask: string;

  addTask(): void {
    this.newTask !== undefined && this.newTask !== ' ' ? this.tasks.push(this.newTask) : alert('Keine Aufgabe eingetragen!');
    this.tasks.sort((pre, curr) => pre.localeCompare(curr));
    this.newTask = undefined;
  }

  removeTask(task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}
