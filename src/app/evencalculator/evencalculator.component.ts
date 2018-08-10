import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from '../calculate.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-evencalculator',
  templateUrl: './evencalculator.component.html',
  styleUrls: ['./evencalculator.component.css']
})
export class EvencalculatorComponent {
	
  calcForm: FormGroup;
  expression = '';
  submitted = false;
  solution: string;

  constructor(public calculateService: CalculateService) { 
	  this.createForm();
  }

  createForm(): void {
    this.calcForm = new FormGroup({
      'expression': new FormControl(this.expression, Validators.required)
    });
  }
  
  onSubmit(): void {
    var givenExpression = this.calcForm['value']['expression'];
    var payload = {
      value: parseInt(givenExpression)
    };
    this.calculateService.getResponseFromServer(payload).subscribe(response => {
      this.solution = response.value;
      console.log('Submitted');
      this.submitted = true;
    });
  }
}
