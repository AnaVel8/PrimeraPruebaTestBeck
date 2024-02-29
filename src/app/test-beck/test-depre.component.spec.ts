import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBeckComponent } from './test-depre.component';

describe('TestDepreComponent', () => {
  let component: TestBeckComponent;
  let fixture: ComponentFixture<TestBeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestBeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestBeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
