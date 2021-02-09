import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaqdetailsPage } from './faqdetails.page';
import { CollapsibleModule } from 'angular2-collapsible';

const routes: Routes = [
  {
    path: '',
    component: FaqdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollapsibleModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [FaqdetailsPage]
})
export class FaqdetailsPageModule {}
