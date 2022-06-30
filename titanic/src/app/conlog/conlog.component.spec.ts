import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConlogComponent } from './conlog.component';

describe('ConlogComponent', () => {
  let component: ConlogComponent;
  let fixture: ComponentFixture<ConlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
