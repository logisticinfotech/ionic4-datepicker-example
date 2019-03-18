import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
      path: 'reactive-form',
      loadChildren: './reactive-form/reactive-form.module#ReactiveFormPageModule'
   },
  { path: 'template-driven-form', loadChildren: './template-driven-form/template-driven-form.module#TemplateDrivenFormPageModule' },
  { path: 'reactive-form', loadChildren: './reactive-form/reactive-form.module#ReactiveFormPageModule' },
  { path: 'datepicker-component', loadChildren: './datepicker-component/datepicker-component.module#DatepickerComponentPageModule' },
  { path: 'datepicker-directive', loadChildren: './datepicker-directive/datepicker-directive.module#DatepickerDirectivePageModule' },
  { path: 'datepicker-button', loadChildren: './datepicker-button/datepicker-button.module#DatepickerButtonPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
