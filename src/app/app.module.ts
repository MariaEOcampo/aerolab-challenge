import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';

import { PointsModalComponent } from './components/points-modal/points-modal.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { RedeemModalComponent } from './components/redeem-modal/redeem-modal.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    HeaderComponent,
    CardComponent,

    PointsModalComponent,
    HistoryCardComponent,
    RedeemModalComponent,
    EmptyStateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    BsModalRef,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
