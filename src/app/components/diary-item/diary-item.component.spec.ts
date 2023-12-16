import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryItemComponent } from './diary-item.component';

describe('DiaryItemComponent', () => {
  let component: DiaryItemComponent;
  let fixture: ComponentFixture<DiaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
