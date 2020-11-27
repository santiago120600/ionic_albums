import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbumsModalPage } from './albums-modal.page';

describe('AlbumsModalPage', () => {
  let component: AlbumsModalPage;
  let fixture: ComponentFixture<AlbumsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
