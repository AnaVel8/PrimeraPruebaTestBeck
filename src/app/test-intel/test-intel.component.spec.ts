import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIntelComponent } from './test-intel.component';

describe('TestIntelComponent', () => {
  let component: TestIntelComponent;
  let fixture: ComponentFixture<TestIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestIntelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
