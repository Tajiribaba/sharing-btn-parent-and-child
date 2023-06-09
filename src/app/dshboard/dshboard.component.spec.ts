import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshboardComponent } from './dshboard.component';

describe('DshboardComponent', () => {
  let component: DshboardComponent;
  let fixture: ComponentFixture<DshboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DshboardComponent]
    });
    fixture = TestBed.createComponent(DshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
