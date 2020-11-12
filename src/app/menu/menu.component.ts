import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController} from '@ionic/angular';
import { DataService } from '../data/data.service';
import { Storage } from '@ionic/storage';
import { AboutusComponent } from '../menu/aboutus/aboutus.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  province;
  constructor( 
    public modalController: ModalController,
    public service: DataService,
    public socialshare: SocialSharing,
    private storage: Storage,
     )
  { 
  
  }

  ngOnInit() {
    this.storage.get('province').then(value=>{
      this.province = value
      console.log("prov", value)
    })

  }
  async about(){
    const modal = await this.modalController.create({
      component: AboutusComponent,
      animated: true,
      mode: 'ios',
    });
    return await modal.present();
  }
  selectProvince(province){
    this.storage.set('province',province.target.value)
    this.storage.get('province').then(value=>{
      this.province = value
    })
  }
  share(){
    this.socialshare.share(null, null, 'mybook', null);
  }
}
