import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;  

}
