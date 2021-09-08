import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { CoinsService } from 'src/app/services/coins.service';
import { IntegrationService } from 'src/app/services/integration.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-points-modal',
  templateUrl: './points-modal.component.html',
  styleUrls: ['./points-modal.component.scss'],
})
export class PointsModalComponent implements OnInit {
  public pointsToBuy!: number[];
  public userPoints$!: Observable<number>;
  public successPoints: boolean = false;
  public serviceError!: boolean;
  public errorService!: boolean;

  constructor(
    private modalService: BsModalService,
    private integrationService: IntegrationService,
    public bsModalRef: BsModalRef,
    private coinsService: CoinsService
  ) {}

  ngOnInit(): void {}

  getCoins(value: number) {
    let points = {
      amount: value,
    };
    let newPoints;
    this.coinsService.postPoints(points).subscribe(
      (resp) => {
        (newPoints = resp['New Points']),
          this.integrationService.emitUserPoints$(newPoints);
        this.successPoints = true;
      },
      (err) => {
        this.errorService = true;
        return throwError(err);
      }
    );
  }

  hideModal() {
    this.modalService.hide();
  }
}
