import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCheckoutComponent } from './store-checkout.component';

describe('StoreCheckoutComponent', () => {
  let component: StoreCheckoutComponent;
  let fixture: ComponentFixture<StoreCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
