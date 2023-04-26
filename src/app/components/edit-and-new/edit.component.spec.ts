import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAndNewComponent } from './edit-and-new.component';

describe('EditAndNewComponent', () => {
  let component: EditAndNewComponent;
  let fixture: ComponentFixture<EditAndNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAndNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAndNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
