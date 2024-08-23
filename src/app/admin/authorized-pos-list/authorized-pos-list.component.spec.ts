import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPosListComponent } from './authorized-pos-list.component';

describe('AuthorizedPosListComponent', () => {
  let component: AuthorizedPosListComponent;
  let fixture: ComponentFixture<AuthorizedPosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizedPosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedPosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
