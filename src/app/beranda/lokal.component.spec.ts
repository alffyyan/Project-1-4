import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokalComponent } from './lokal.component';

describe('LokalComponent', () => {
  let component: LokalComponent;
  let fixture: ComponentFixture<LokalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LokalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
