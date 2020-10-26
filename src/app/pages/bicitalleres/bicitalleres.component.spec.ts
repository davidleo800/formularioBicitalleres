import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicitalleresComponent } from './bicitalleres.component';

describe('BicitalleresComponent', () => {
  let component: BicitalleresComponent;
  let fixture: ComponentFixture<BicitalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicitalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicitalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
