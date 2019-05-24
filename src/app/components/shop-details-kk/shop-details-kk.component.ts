import { Component, OnInit } from '@angular/core';
import {KKDataService} from '../../services/kk-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-details-kk',
  templateUrl: './shop-details-kk.component.html',
  styleUrls: ['./shop-details-kk.component.css']
})
export class ShopDetailsKKComponent implements OnInit {
  public image = '';
  public text: string;
  public id: number;
  public title: string;
  public price: number;


  constructor(private dataService: KKDataService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.dataService.getById(id).subscribe(res => {
        this.id = res['id'];
        this.title = res['title'];
        this.text = res['text'];
        this.image = res['image'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }
}
