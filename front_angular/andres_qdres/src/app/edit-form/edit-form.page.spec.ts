import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFormPage } from './edit-form.page';

describe('EditFormPage', () => {
  let component: EditFormPage;
  let fixture: ComponentFixture<EditFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
