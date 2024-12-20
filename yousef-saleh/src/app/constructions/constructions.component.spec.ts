import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionsComponent } from './constructions.component';

describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
