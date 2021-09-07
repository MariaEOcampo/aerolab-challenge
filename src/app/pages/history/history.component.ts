import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public listOfRedeem!: [];
  public actualPage: number = 1;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getHistoryProducts()
      .subscribe((redeems) => (this.listOfRedeem = redeems));
  }
}
