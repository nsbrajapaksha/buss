import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCompComponent } from './six-comp.component';

describe('SixCompComponent', () => {
  let component: SixCompComponent;
  let fixture: ComponentFixture<SixCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
