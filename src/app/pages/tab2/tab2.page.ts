import { PopoverPage } from './../popover/popover.page';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async openPopover(){
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        values: 'Esto es una ventana modal popover'
      }
    })
    console.log('Esto es una ventana modal popover')
    return await popover.present();
  }

}
