import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPesoComponent } from './cadastro-peso.component';

describe('CadastroPesoComponent', () => {
  let component: CadastroPesoComponent;
  let fixture: ComponentFixture<CadastroPesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPesoComponent]
    });
    fixture = TestBed.createComponent(CadastroPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
