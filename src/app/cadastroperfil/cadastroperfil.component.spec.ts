import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroperfilComponent } from './cadastroperfil.component';

describe('CadastroperfilComponent', () => {
  let component: CadastroperfilComponent;
  let fixture: ComponentFixture<CadastroperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
