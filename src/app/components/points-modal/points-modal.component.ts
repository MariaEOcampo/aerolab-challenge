import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { CoinsService } from 'src/app/services/coins.service';
import { IntegrationService } from 'src/app/services/integration.service';

@Component({
  selector: 'app-points-modal',
  templateUrl: './points-modal.component.html',
  styleUrls: ['./points-modal.component.scss'],
})
export class PointsModalComponent implements OnInit {
  public pointsToBuy!: number[];
  public userPoints$!: Observable<number>;

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
    this.coinsService.postPoints(points).subscribe((resp) => {
      (newPoints = resp['New Points']),
        this.integrationService.emitUserPoints$(newPoints);
    });
  }

  hideModal() {
    this.modalService.hide();
  }
}