import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCompComponent } from './three-comp.component';

describe('ThreeCompComponent', () => {
  let component: ThreeCompComponent;
  let fixture: ComponentFixture<ThreeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
