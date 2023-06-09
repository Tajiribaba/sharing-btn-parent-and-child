import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictTestComponent } from './conflict-test.component';

describe('ConflictTestComponent', () => {
  let component: ConflictTestComponent;
  let fixture: ComponentFixture<ConflictTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConflictTestComponent]
    });
    fixture = TestBed.createComponent(ConflictTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
