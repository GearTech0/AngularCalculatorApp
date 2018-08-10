import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// for Routes
import { AppComponent } from './app.component';
import { EvencalculatorComponent } from './evencalculator/evencalculator.component';

// Routes
const routes: Routes = [
	{ path: 'calculator', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { 
	
}