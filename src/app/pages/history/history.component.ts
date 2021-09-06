import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  listOfRedeem!: [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getHistoryProducts()
      .subscribe((data) => console.log('history', data));
  }
}
