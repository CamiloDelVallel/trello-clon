import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog'
import { faCheckToSlot, faBars, faClose, faUser, faTag, faCheckSquare, faClock
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';



@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  constructor (
    private dialogRef: DialogRef
  ){}

  close(){
    this.dialogRef.close();
  }

  faCheckToSlot = faCheckToSlot;
  faBars = faBars ;
  faClose  = faClose;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
}
