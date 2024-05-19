import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibraryComponent } from './create-library.component';

describe('CreateLibraryComponent', () => {
  let component: CreateLibraryComponent;
  let fixture: ComponentFixture<CreateLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
