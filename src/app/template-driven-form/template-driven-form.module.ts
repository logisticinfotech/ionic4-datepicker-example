import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TemplateDrivenFormPage } from './template-driven-form.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemplateDrivenFormPage]
})
export class TemplateDrivenFormPageModule {}
