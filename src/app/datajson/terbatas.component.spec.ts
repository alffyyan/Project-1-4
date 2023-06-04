import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerbatasComponent } from './terbatas.component';

describe('TerbatasComponent', () => {
  let component: TerbatasComponent;
  let fixture: ComponentFixture<TerbatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerbatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerbatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
