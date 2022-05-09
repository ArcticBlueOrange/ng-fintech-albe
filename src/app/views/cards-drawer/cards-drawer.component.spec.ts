import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDrawerComponent } from './cards-drawer.component';

describe('CardsDrawerComponent', () => {
  let component: CardsDrawerComponent;
  let fixture: ComponentFixture<CardsDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
