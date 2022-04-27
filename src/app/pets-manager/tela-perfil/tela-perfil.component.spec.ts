import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPerfilComponent } from './tela-perfil.component';

describe('TelaPerfilComponent', () => {
  let component: TelaPerfilComponent;
  let fixture: ComponentFixture<TelaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
