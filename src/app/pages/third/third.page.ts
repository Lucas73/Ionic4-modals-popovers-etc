import { ItemServiceService } from './../../services/item-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
  items: Array<any>;
  searchTerm: string = '';
  sinItems = false;

  constructor(private router: Router, private itemServiceService: ItemServiceService, private actionSheetController: ActionSheetController) {}

  ngOnInit() {
    this.items = this.itemServiceService.getItems();
  }
  setFilteredItems(event){
    this.items = this.itemServiceService.filterItems(event.target.value);
    if(this.items.length == 0){
      this.sinItems = true;
    }else{
      this.sinItems = false;
    }
  }

}
