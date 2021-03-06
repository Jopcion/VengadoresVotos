import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeComponent } from './superheroe.component';

describe('PersonaComponent', () => {
  let component: SuperheroeComponent;
  let fixture: ComponentFixture<SuperheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
