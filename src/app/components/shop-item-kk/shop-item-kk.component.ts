import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-kk',
  templateUrl: './shop-item-kk.component.html',
  styleUrls: ['./shop-item-kk.component.css']
})
export class ShopItemKKComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;


  constructor() { }

  ngOnInit() {
  }

}
