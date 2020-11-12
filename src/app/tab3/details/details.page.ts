import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DataService} from 'src/app/data/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 donors;
 donorId;
  constructor(
    public service: DataService,
    public modalController: ModalController,
  ) { }

  ngOnInit()
  {
    this.donors = this.service.getDonor(this.donorId);
  }
  close() {
    this.modalController.dismiss();
  }
}
