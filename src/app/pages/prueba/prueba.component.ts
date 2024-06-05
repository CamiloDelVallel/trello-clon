import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ScrollingModule],
  templateUrl: './prueba.component.html'
})
export class PruebaComponent {
  
  products: Product[] = [];

  ngOnInit(): void {
    
  }

}
