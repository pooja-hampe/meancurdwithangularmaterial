import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvaddfileComponent } from './csvaddfile.component';

describe('CsvaddfileComponent', () => {
  let component: CsvaddfileComponent;
  let fixture: ComponentFixture<CsvaddfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvaddfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvaddfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
