import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeildErrorComponent } from './feild-error.component';

describe('FeildErrorComponent', () => {
  let component: FeildErrorComponent;
  let fixture: ComponentFixture<FeildErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeildErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeildErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
