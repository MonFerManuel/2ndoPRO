import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatstoreComponent } from './beatstore.component';

describe('BeatstoreComponent', () => {
  let component: BeatstoreComponent;
  let fixture: ComponentFixture<BeatstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
