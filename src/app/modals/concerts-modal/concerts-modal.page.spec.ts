import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcertsModalPage } from './concerts-modal.page';

describe('ConcertsModalPage', () => {
  let component: ConcertsModalPage;
  let fixture: ComponentFixture<ConcertsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
