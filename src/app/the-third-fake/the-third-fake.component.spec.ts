import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheThirdFakeComponent } from './the-third-fake.component';

describe('TheThirdFakeComponent', () => {
  let component: TheThirdFakeComponent;
  let fixture: ComponentFixture<TheThirdFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheThirdFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheThirdFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
