import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesmalasComponent } from './credencialesmalas.component';

describe('CredencialesmalasComponent', () => {
  let component: CredencialesmalasComponent;
  let fixture: ComponentFixture<CredencialesmalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialesmalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredencialesmalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
