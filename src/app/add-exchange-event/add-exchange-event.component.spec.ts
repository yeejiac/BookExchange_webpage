import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExchangeEventComponent } from './add-exchange-event.component';

describe('AddExchangeEventComponent', () => {
  let component: AddExchangeEventComponent;
  let fixture: ComponentFixture<AddExchangeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExchangeEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExchangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
