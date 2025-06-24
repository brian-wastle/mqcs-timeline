import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchTextComponent } from './pitch-text.component';

describe('PitchTextComponent', () => {
  let component: PitchTextComponent;
  let fixture: ComponentFixture<PitchTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitchTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
