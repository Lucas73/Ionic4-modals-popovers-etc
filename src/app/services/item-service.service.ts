import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  items:Array<any> = [
    {
      'id': "1",
      'title': "Monstruos de bolsillo Amarillo",
    },
    {
      'id': "2",
      'title': "Caballero hueco",
    },
    {
      'id': "3",
      'title': "Mundo del arte de la guerra",
    },
    {
      'id': "4",
      'title': "Liga de las leyendas",
    },
    {
      'id': "5",
      'title': "Cazador de monstruos huntado",
    },
    {
      'id': "6",
      'title': "Campo de batalla V",
    },
    {
      'id': "7",
      'title': "Jugadores desconocidos en el campo de batalla",
    }
  ]
  constructor() { }
  createItem(title){
    let randomId = Math.random().toString(36).substr(2,5);
    this.items.push({
      'id': randomId,
      'title': title,
    })
  }
  getItems(){
    return this.items;
  }
  getItembsById(id){
    return this.items.filter(item => item.id ===id);
  }
  filterItems(searchTerm){
    if (searchTerm === ""){
      return this.items;
    }
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    })
  }

}
