import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you are using ngModel

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule here
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
  ];

  newTaskTitle = '';
  newTaskDescription = '';

  addTask() {
    const newTask = {
      id: this.tasks.length + 1,
      title: this.newTaskTitle,
      description: this.newTaskDescription
    };
    this.tasks.push(newTask);
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }
}
