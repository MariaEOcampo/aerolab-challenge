import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-redeem-modal',
  templateUrl: './redeem-modal.component.html',
  styleUrls: ['./redeem-modal.component.scss'],
})
export class RedeemModalComponent implements OnInit {
  public message: string = '';
  public success!: boolean;
  constructor(
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  hideModal() {
    this.modalService.hide();
  }
}
