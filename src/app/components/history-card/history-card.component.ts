import { Component, Input, OnInit } from '@angular/core';
import { Redeem } from 'src/app/interfaces/redeem.interface';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {
  @Input() redeem!: Redeem;

  constructor() {}

  ngOnInit(): void {}
}
