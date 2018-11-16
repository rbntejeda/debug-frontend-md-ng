import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugAdminComponent } from './debug-admin.component';

describe('DebugAdminComponent', () => {
  let component: DebugAdminComponent;
  let fixture: ComponentFixture<DebugAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
