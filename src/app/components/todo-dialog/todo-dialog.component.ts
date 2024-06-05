import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { faCheckToSlot, faBars, faClose, faUser, faTag, faCheckSquare, faClock
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

interface InputData{
  todo: ToDo;
}

interface OutputData{
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  constructor (
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ){
    this.todo = data.todo;
  }

  close(){
    this.dialogRef.close({
      rta: true
    });
  }

  faCheckToSlot = faCheckToSlot;
  faBars = faBars ;
  faClose  = faClose;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;
}
