import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicitallerComponent } from './bicitaller.component';

describe('BicitallerComponent', () => {
  let component: BicitallerComponent;
  let fixture: ComponentFixture<BicitallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicitallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicitallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
