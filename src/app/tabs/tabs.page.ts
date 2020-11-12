import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router: Router, public popoverController: PopoverController, public modalController: ModalController, public alertController: AlertController) {
    document.addEventListener("backbutton", async () => {
      this.checker();
    });
  }

async presentAlertConfirm() {

    if (this.router.isActive('/tabs/tab1', true) && this.router.url === '/tabs/tab1') {
      const alert = await this.alertController.create({
        header: 'توجه!',
        message: 'میخواهید اپلیکیشن بسته شود؟',
        buttons: [
          {
            text: 'لغو',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: 'تایید',
            handler: () => {
              navigator['app'].exitApp();
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.router.navigateByUrl('/tabs/tab1');
    }
  }
  checker() {

    this.popoverController.getTop().then(res => {
      if (res) {
        this.popoverController.dismiss();
      } else {
        this.modalController.getTop().then(res => {
          if (res){
            this.modalController.dismiss();
          }
          else{
            this.alertController.getTop().then(res => {
              if (res) {
                this.alertController.dismiss();
              } else {
                this.presentAlertConfirm();
              }
            });
          }
        });
      }
    });
  }
}
