import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareSalleComponent } from './declare-salle.component';

describe('DeclareSalleComponent', () => {
  let component: DeclareSalleComponent;
  let fixture: ComponentFixture<DeclareSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclareSalleComponent]
    });
    fixture = TestBed.createComponent(DeclareSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
