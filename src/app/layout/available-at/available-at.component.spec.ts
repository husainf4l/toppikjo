import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAtComponent } from './available-at.component';

describe('AvailableAtComponent', () => {
  let component: AvailableAtComponent;
  let fixture: ComponentFixture<AvailableAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableAtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
