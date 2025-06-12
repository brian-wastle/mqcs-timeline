import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChironComponent } from './chiron.component';

describe('ChironComponent', () => {
  let component: ChironComponent;
  let fixture: ComponentFixture<ChironComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChironComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChironComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
