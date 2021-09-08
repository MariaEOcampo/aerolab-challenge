import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public listOfRedeem!: [];
  public actualPage: number = 1;
  public errorService!: boolean;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.errorService = false;
    this.productService.getHistoryProducts().subscribe(
      (redeems) => (this.listOfRedeem = redeems),
      (err) => {
        this.errorService = true;
        return throwError(err);
      }
    );
  }
}
