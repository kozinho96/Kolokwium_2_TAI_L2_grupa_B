import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsKKComponent } from './shop-details-kk.component';

describe('ShopDetailsKKComponent', () => {
  let component: ShopDetailsKKComponent;
  let fixture: ComponentFixture<ShopDetailsKKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsKKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsKKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
