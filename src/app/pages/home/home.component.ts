import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { IntegrationService } from '../../services/integration.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PointsModalComponent } from '../../components/points-modal/points-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  public pointsToBuy: number[] = [1000, 5000, 7500];
  public actualPage: number = 1;

  constructor(
    private productsService: ProductsService,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((productsResponse) => {
      this.products = productsResponse;
    });
  }

  showMostrecent() {
    this.productsService.getProducts().subscribe((productsResponse) => {
      this.products = productsResponse;
    });
  }

  sortByLowest() {
    const productsLowest = this.products
      .filter((product) => product.cost)
      .sort((cost1, cost2) => cost1.cost - cost2.cost);
    this.products = productsLowest;
  }

  sortByHighest() {
    const productsLowest = this.products
      .filter((product) => product.cost)
      .sort((cost1, cost2) => cost2.cost - cost1.cost);
    this.products = productsLowest;
  }

  openPointsModal() {
    this.bsModalRef = this.modalService.show(PointsModalComponent, {
      initialState: {
        pointsToBuy: this.pointsToBuy,
      },
    });
  }
}
