import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { IntegrationService } from 'src/app/services/integration.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Product;
  public userPoints$!: Observable<number>;

  private pointsToChange!: number;

  constructor(
    private integrationService: IntegrationService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {}

  redeem(cost: number, id: string) {
    let result;
    let bodyPost = {
      productId: id,
    };
    this.userPoints$ = this.integrationService.getUserPoints$();
    this.userPoints$.subscribe((pointsResponse) => {
      this.pointsToChange = pointsResponse;
    });
    if (this.pointsToChange < cost) {
      let diff = cost - this.pointsToChange;
      console.log(`no tienes puntos, necesitas ${diff} puntos `);
    } else {
      result = this.pointsToChange - cost;
      this.integrationService.emitUserPoints$(result);
      console.log(result);
    }
    this.productService
      .postProducts(bodyPost)
      .subscribe((resp) => console.log(resp));
  }
}
