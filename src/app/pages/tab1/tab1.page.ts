import { Component, OnInit } from '@angular/core';
import { ModalPage } from '../modal/modal.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private modalController: ModalController) { 
   }

  ngOnInit() {
  }
  async openModal(){
   const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        values: 'esto es una ventana modal'
      }
   })   
   console.log('Esto es una ventana modal');
   return await modal.present();
  }

}
