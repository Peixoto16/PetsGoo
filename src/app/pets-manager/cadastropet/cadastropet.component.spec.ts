import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropetComponent } from './cadastropet.component';

describe('CadastropetComponent', () => {
  let component: CadastropetComponent;
  let fixture: ComponentFixture<CadastropetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastropetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastropetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
