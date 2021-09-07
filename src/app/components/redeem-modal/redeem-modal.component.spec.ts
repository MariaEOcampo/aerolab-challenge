import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemModalComponent } from './redeem-modal.component';

describe('RedeemModalComponent', () => {
  let component: RedeemModalComponent;
  let fixture: ComponentFixture<RedeemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
