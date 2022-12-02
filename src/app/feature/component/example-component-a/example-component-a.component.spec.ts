import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentAComponent } from './example-component-a.component';

describe('ExampleComponentAComponent', () => {
  let component: ExampleComponentAComponent;
  let fixture: ComponentFixture<ExampleComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleComponentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
