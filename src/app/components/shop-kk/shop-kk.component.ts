import {Component, OnInit} from '@angular/core';
import {KKDataService} from '../../services/kk-data.service';

@Component({
  selector: 'app-shop-kk',
  templateUrl: './shop-kk.component.html',
  styleUrls: ['./shop-kk.component.css']
})
export class ShopKKComponent implements OnInit {

  public items$: any;

  constructor(private service: KKDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
