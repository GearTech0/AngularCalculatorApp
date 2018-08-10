import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EvencalculatorComponent } from './evencalculator/evencalculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        EvencalculatorComponent
      ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
