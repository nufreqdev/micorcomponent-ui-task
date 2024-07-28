import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
}
