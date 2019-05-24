import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemKKComponent } from './shop-item-kk.component';

describe('ShopItemKKComponent', () => {
  let component: ShopItemKKComponent;
  let fixture: ComponentFixture<ShopItemKKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemKKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemKKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
