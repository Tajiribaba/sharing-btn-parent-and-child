import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGitComComponent } from './test-git-com.component';

describe('TestGitComComponent', () => {
  let component: TestGitComComponent;
  let fixture: ComponentFixture<TestGitComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestGitComComponent]
    });
    fixture = TestBed.createComponent(TestGitComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
