import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { EvencalculatorComponent } from './evencalculator.component';
import { CalculateServiceMock } from '../mocks/calculate.service.mock';
import { query } from '@angular/core/src/render3/query';
import { CalculateService } from '../calculate.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EvencalculatorComponent', () => {
  let component: EvencalculatorComponent;
  let fixture: ComponentFixture<EvencalculatorComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvencalculatorComponent ],
      imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
      providers: [
        HttpClient, HttpHandler,
        { provide: CalculateService, useClass: CalculateServiceMock}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(EvencalculatorComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
  it(`should set solution to Odd`, async(() => {
    component.calcForm.controls['expression'].setValue(5); // An odd number should return 'odd'
    fixture.detectChanges();
    // Press the button
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();

    fixture.detectChanges();  // Detect the changes the click has made
    el = fixture.debugElement.query(By.css('#solution')).nativeElement;
    
    expect(el.innerText).toBe('Odd');
  }));
  it(`should set solution to Even`, async(() => {
    component.calcForm.controls['expression'].setValue(4);
    fixture.detectChanges();
    
    // Press the button
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();

    fixture.detectChanges();  // Detect the changes the click has made
    el = fixture.debugElement.query(By.css('#solution')).nativeElement;

    expect(el.innerText).toBe('Even');
  }));
  it(`should set submitted to be true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));
  it(`should call the onSubmit method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it(`form should be invalid`, async(() => {
    component.calcForm.controls['expression'].setValue('');
    expect(component.calcForm.valid).toBeFalsy();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
