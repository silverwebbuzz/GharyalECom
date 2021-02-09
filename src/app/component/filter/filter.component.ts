import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  goBack(){
    this.modalCtrl.dismiss();
  }

  clearAlert(){
    console.log('clear');
  }

  filterApply(){
    console.log('apply');
  }

}
