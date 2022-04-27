import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeupetComponent } from './meupet.component';

describe('MeupetComponent', () => {
  let component: MeupetComponent;
  let fixture: ComponentFixture<MeupetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeupetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeupetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
