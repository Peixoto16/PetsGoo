import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetalhesComponent } from './pet-detalhes.component';

describe('PetDetalhesComponent', () => {
  let component: PetDetalhesComponent;
  let fixture: ComponentFixture<PetDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
