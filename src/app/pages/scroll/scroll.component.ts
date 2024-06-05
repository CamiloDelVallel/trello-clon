import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    NavbarComponent, CommonModule, ScrollingModule
  ],
  templateUrl: './scroll.component.html'
})

export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(
    //public http: HttpClient
  ) { 
    
  }

  ngOnInit(): void {
    /*
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
      
    })
    */
  }

  
}