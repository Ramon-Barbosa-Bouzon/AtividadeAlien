import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedapeComponent } from './redape.component';

describe('RedapeComponent', () => {
  let component: RedapeComponent;
  let fixture: ComponentFixture<RedapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
