import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call Dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Shop for the party'),
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    const userConfirmed = confirm(`Are you sure that you want to delete this task? \n"${existingTask.title}"`);
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task !== existingTask);
    }
  }
}

class Task {
  constructor(public title: string) {}

  isDone = false;

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}