import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKKComponent } from './shop-kk.component';

describe('ShopKKComponent', () => {
  let component: ShopKKComponent;
  let fixture: ComponentFixture<ShopKKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopKKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
