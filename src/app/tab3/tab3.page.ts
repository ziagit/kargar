import { Component, } from '@angular/core';
import { PopoverController, ModalController} from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { DataService} from '../data/data.service';
import { DetailsPage } from './details/details.page';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  donors;
  constructor(
    private calendar: Calendar,
    public service: DataService,
    public modalController: ModalController,
    public popoverController: PopoverController,)
  {
    this.donors=this.service.getDonors();
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  async getItemModal(id) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      animated: true,
      componentProps: {
        donorId: id
      }
    });
    return await modal.present();
  }

  async menu(ev){
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event:ev,
      animated: true,
    });
    return popover.present();
  }
}
