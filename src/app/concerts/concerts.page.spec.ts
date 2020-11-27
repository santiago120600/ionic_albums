import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcertsPage } from './concerts.page';

describe('ConcertsPage', () => {
  let component: ConcertsPage;
  let fixture: ComponentFixture<ConcertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
