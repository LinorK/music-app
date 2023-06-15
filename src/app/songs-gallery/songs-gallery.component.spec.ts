import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsGalleryComponent } from './songs-gallery.component';

describe('SongsGalleryComponent', () => {
  let component: SongsGalleryComponent;
  let fixture: ComponentFixture<SongsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsGalleryComponent]
    });
    fixture = TestBed.createComponent(SongsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
