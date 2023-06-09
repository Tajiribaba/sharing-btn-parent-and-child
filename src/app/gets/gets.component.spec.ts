import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsComponent } from './gets.component';

describe('GetsComponent', () => {
  let component: GetsComponent;
  let fixture: ComponentFixture<GetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetsComponent]
    });
    fixture = TestBed.createComponent(GetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
