import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {KKDataService} from './services/kk-data.service';
import {ShopKKComponent} from './components/shop-kk/shop-kk.component';
import { ShopItemKKComponent } from './components/shop-item-kk/shop-item-kk.component';
import { ShopDetailsKKComponent } from './components/shop-details-kk/shop-details-kk.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopKKComponent,
    ShopItemKKComponent,
    ShopDetailsKKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    KKDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
