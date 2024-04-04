import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBLogComponent } from './update-blog.component';

describe('UpdateBLogComponent', () => {
  let component: UpdateBLogComponent;
  let fixture: ComponentFixture<UpdateBLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
