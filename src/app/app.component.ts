import { Component } from '@angular/core';
import { EvencalculatorComponent } from './evencalculator/evencalculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App With a Working Calculator';
  tagline = 'May cause uncontrollable bowels.';
  solution: number;
}
