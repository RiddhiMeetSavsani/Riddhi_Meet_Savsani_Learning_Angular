import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBookListItemComponent } from './modify-book-list-item.component';

describe('ModifyBookListItemComponent', () => {
  let component: ModifyBookListItemComponent;
  let fixture: ComponentFixture<ModifyBookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyBookListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
