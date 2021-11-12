import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPtiComponent } from './test-pti.component';

describe('TestPtiComponent', () => {
  let component: TestPtiComponent;
  let fixture: ComponentFixture<TestPtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPtiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
