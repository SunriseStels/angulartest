import { Component, OnInit } from '@angular/core';
import {Task} from '../../interfaces/task';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.sass']
})
export class TaskManagerComponent implements OnInit {

  tasks: Task[];
  taskTitle: string;
  idForTask: number;
  beforeEdit: string;
  expandedTask: Task;

  constructor() { }

  ngOnInit() {
    this.taskTitle = '';
    this.beforeEdit = '';
    this.idForTask = 2;
    this.tasks = [
      {
        'id' : 1,
        'title' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium lorem libero, ut malesuada erat vehicula eu. Duis eleifend, sapien eu sagittis hendrerit, est augue elementum erat, sit amet malesuada ex ipsum id ex. Sed efficitur ipsum tortor, vitae suscipit est sodales a. Nunc et hendrerit lorem. Vestibulum id suscipit est, ut laoreet sapien. Nulla feugiat risus et lacus pharetra rhoncus. Nunc laoreet varius nisi, nec pellentesque arcu vestibulum in. Donec at aliquet nibh, eget vestibulum nibh. Sed hendrerit augue eget lacus consequat convallis. Cras mollis, massa eu congue placerat, nisl tellus dignissim eros, sit amet porta tortor sapien ut lectus. Ut ac lectus et mi tincidunt bibendum et et neque. Cras rhoncus metus leo, sed tempor est interdum quis.',
        'completed' : false,
        'editing' : false,
      }
    ]
  }

  addTask() {

    if(this.taskTitle.trim().length === 0) {
      return;
    }

    this.tasks.unshift({
      id: this.idForTask,
      title: this.taskTitle,
      completed: false,
      editing: false,
    })

    this.taskTitle = '';
    this.idForTask++;

  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTask(task: Task) {
    if (task.completed) {
      return;
    }
    this.beforeEdit = task.title;
    task.editing = true;
  }

  doneEdit(task: Task) {
    if(task.title.trim().length === 0) {
      task.title = this.beforeEdit;
    }
    task.editing = false;
  }

  cancelEdit(task: Task) {
    task.title = this.beforeEdit;
    task.editing = false;
  }

  taskExpand(task: Task) {
    this.expandedTask = task;
  }

  trackByFn(index, item) {
    return item.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

}
