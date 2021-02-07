import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickoutComponent } from './kickout.component';

describe('KickoutComponent', () => {
  let component: KickoutComponent;
  let fixture: ComponentFixture<KickoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KickoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
