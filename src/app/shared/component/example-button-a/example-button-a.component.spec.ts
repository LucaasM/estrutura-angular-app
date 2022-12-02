import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleButtonAComponent } from './example-button-a.component';

describe('ExampleButtonAComponent', () => {
  let component: ExampleButtonAComponent;
  let fixture: ComponentFixture<ExampleButtonAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleButtonAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleButtonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
