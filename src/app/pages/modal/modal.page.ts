import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public frase: String;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.frase = this.navParams.data.values;
  }
  closeModal(){
    this.modalController.dismiss()
  }

}
