import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenresModalPage } from './genres-modal.page';

describe('GenresModalPage', () => {
  let component: GenresModalPage;
  let fixture: ComponentFixture<GenresModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenresModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
