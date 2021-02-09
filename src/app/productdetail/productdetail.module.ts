import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPage } from './productdetail.page';
import { CollapsibleModule } from 'angular2-collapsible';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CollapsibleModule
  ],
  declarations: [ProductdetailPage]
})
export class ProductdetailPageModule {}
