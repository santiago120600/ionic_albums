import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistsModalPage } from './artists-modal.page';

describe('ArtistsModalPage', () => {
  let component: ArtistsModalPage;
  let fixture: ComponentFixture<ArtistsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
