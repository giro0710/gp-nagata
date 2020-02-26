import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndServicesComponent } from './product-and-services.component';

describe('ProductAndServicesComponent', () => {
  let component: ProductAndServicesComponent;
  let fixture: ComponentFixture<ProductAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
