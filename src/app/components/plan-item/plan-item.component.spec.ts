import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanItemComponent } from './plan-item.component';

describe('PlanItemComponent', () => {
  let component: PlanItemComponent;
  let fixture: ComponentFixture<PlanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
