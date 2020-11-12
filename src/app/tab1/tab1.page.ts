import { Component, OnInit  } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { PopoverController} from '@ionic/angular';
import { DataService} from '../data/data.service';
import { DetailsPage} from './details/details.page';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 public items: any[];
 myInput;
 queryText;
  constructor(
    public service: DataService, 
    public modalController: ModalController,
    public popoverController: PopoverController) {
    this.items=service.getItems()
  }

 async menu(ev){
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event:ev,
      animated: true,
    });
    return await popover.present();
  }
  async filterList(evt) {
    this.items = await this.service.getItems();
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
    this.items = this.items.filter(currentItem => {
      if (currentItem.name && searchTerm) {
        return (currentItem.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  async getItemModal(id) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      animated: true,
      componentProps: {
        itemId: id
      }
    });
    return await modal.present();
  }
}
