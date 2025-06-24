import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtlTextComponent } from './addtl-text.component';

describe('AddtlTextComponent', () => {
  let component: AddtlTextComponent;
  let fixture: ComponentFixture<AddtlTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtlTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
