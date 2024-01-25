import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaLLComponent } from './viewa-ll.component';

describe('ViewaLLComponent', () => {
  let component: ViewaLLComponent;
  let fixture: ComponentFixture<ViewaLLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaLLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
