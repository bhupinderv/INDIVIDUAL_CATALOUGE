import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdIndvComponent } from './upd-indv.component';

describe('UpdIndvComponent', () => {
  let component: UpdIndvComponent;
  let fixture: ComponentFixture<UpdIndvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdIndvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdIndvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
