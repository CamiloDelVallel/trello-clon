import { Component, OnInit, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../../components/btn/btn.component';
import { CdkTableModule } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent, CommonModule, BtnComponent, CdkTableModule, ReactiveFormsModule
  ],
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true});

  //private http = inject(HttpClient)

  constructor(
    //private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    //this.getData();
    /*
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })
    */
   this.input.valueChanges
   .subscribe(value => console.log(value))
  }

  /*
  private getData(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })
  }
  */

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

}