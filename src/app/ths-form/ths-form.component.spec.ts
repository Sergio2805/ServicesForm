import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsFormComponent } from './ths-form.component';

describe('ThsFromComponent', () => {
  let component: ThsFormComponent;
  let fixture: ComponentFixture<ThsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
