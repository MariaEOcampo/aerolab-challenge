import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { IntegrationService } from 'src/app/services/integration.service';
import { ProductsService } from '../../services/products.service';
import { RedeemModalComponent } from '../redeem-modal/redeem-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Product;
  public userPoints$!: Observable<number>;
  public message!: string;
  private pointsToChange!: number;

  constructor(
    private integrationService: IntegrationService,
    private productService: ProductsService,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
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
      this.message = `You don't have enough points, you need ${diff} more!`;
      this.bsModalRef = this.modalService.show(RedeemModalComponent, {
        initialState: {
          message: this.message,
          success: false,
        },
      });
    } else {
      result = this.pointsToChange - cost;
      this.integrationService.emitUserPoints$(result);
      console.log(result);
    }
    this.productService.postProducts(bodyPost).subscribe((msg) => {
      this.message = msg.message;
      this.bsModalRef = this.modalService.show(RedeemModalComponent, {
        initialState: {
          message: this.message,
          success: true,
        },
      });
    });
  }
}
