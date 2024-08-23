import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPosFormComponent } from './authorized-pos-form.component';

describe('AuthorizedPosFormComponent', () => {
  let component: AuthorizedPosFormComponent;
  let fixture: ComponentFixture<AuthorizedPosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizedPosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedPosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
