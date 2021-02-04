import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDoListePage } from './to-do-liste.page';

describe('ToDoListePage', () => {
  let component: ToDoListePage;
  let fixture: ComponentFixture<ToDoListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
