import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/data/data.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CallPopoverComponent } from 'src/app/call-popover/call-popover.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  items;
  itemId;
  selectedProvince='kabul';
  constructor(
    public service:DataService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    private storage: Storage,
  ) { }
  
  ngOnInit() {
    this.items = this.service.getItem(this.itemId);
    this.storage.get('province').then(value=>{
      this.selectedProvince = value
    })
  }
  close() {
    this.modalController.dismiss();
  }
 
  async phonelist(ev){
    const popover = await this.popoverController.create({
      component: CallPopoverComponent,
      event:ev,
      animated: true,
    });
    return await popover.present();
  }

}
