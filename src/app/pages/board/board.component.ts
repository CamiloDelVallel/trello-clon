import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule],
  templateUrl: './board.component.html',
  styles: 
  `
    /* Animate items as they're being sorted. */
  .cdk-drop-list-dragging .cdk-drag {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }

  /* Animate an item that has been dropped. */
  .cdk-drag-animating {
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }
  `
})
export class BoardComponent {

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'UNO'
        },
        {
          id: '2',
          title: 'DOS'
        },
        {
          id: '3',
          title: 'TRES'
        }
      ]
    },
    {
      title: 'doing',
      todos: [
        {
          id: '4',
          title: 'doing 1'
        },
        {
          id: '5',
          title: 'doing 2'
        },
        {
          id: '6',
          title: 'doing 3'
        }
      ]
    },
    {
      title: 'done',
      todos: [
        {
          id: '7',
          title: 'DONE 1'
        },
        {
          id: '8',
          title: 'DONE 2'
        },
        {
          id: '9',
          title: 'DONE 3'
        }
    
      ]
    },
  ]

  drop(event: CdkDragDrop<ToDo[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    } 
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  };
}
