import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsingComponent } from './asing.component';

describe('AsingComponent', () => {
  let component: AsingComponent;
  let fixture: ComponentFixture<AsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
