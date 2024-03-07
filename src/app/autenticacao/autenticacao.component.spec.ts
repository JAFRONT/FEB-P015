import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoComponent } from './autenticacao.component';

describe('AutenticacaoComponent', () => {
  let component: AutenticacaoComponent;
  let fixture: ComponentFixture<AutenticacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticacaoComponent]
    });
    fixture = TestBed.createComponent(AutenticacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
