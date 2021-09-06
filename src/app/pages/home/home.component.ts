import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { IntegrationService } from '../../services/integration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((productsResponse) => {
      this.products = productsResponse;
      console.log(this.products);
    });
  }

  showMostrecent() {
    console.log('recent');
  }

  sortByLowest() {
    console.log('lowest');
  }

  sortByHighest() {
    console.log('highest');
  }
}
