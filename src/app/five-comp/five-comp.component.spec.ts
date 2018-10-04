import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveCompComponent } from './five-comp.component';

describe('FiveCompComponent', () => {
  let component: FiveCompComponent;
  let fixture: ComponentFixture<FiveCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
