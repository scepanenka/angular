import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalexComponentComponent } from './stalex-component.component';

describe('StalexComponentComponent', () => {
  let component: StalexComponentComponent;
  let fixture: ComponentFixture<StalexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalexComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
