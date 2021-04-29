import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndvComponent } from './add-indv.component';

describe('AddIndvComponent', () => {
  let component: AddIndvComponent;
  let fixture: ComponentFixture<AddIndvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIndvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
