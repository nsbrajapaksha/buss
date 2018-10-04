import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCompComponent } from './four-comp.component';

describe('FourCompComponent', () => {
  let component: FourCompComponent;
  let fixture: ComponentFixture<FourCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
