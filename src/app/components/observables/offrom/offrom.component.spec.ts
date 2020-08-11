import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffromComponent } from './offrom.component';

describe('OffromComponent', () => {
  let component: OffromComponent;
  let fixture: ComponentFixture<OffromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
