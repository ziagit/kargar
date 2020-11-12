import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { Storage } from '@ionic/storage';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  inputText;
  inputDate;
  lists=[];
  isDone=false;
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    private storage: Storage)
    {
      this.get();
    }

  get(){
    this.storage.get('lists').then(value=>{
      this.lists=value;
      console.log("list", this.lists)
    })
  }

  save(){
    if(this.inputText != null){
      let list = {};
      list['text']=this.inputText;
      list['date']=this.inputDate;
      list['color']='black';
      this.lists.push(list);
      this.storage.set('lists',this.lists);
    }
  }
 
  done(index){
    let ind = this.lists.indexOf(index);
    if(this.lists[ind]['color'] === 'green'){
      this.lists[ind]['color'] ='black';
      this.storage.set('lists',this.lists);
    }else{
      this.lists[ind]['color'] ='green';
      this.storage.set('lists',this.lists);
    }
   
  }
  remove(index){
    let ind = this.lists.indexOf(index);
    this.lists.splice(ind, 1);
    this.storage.set('lists',this.lists);
  }

  async menu(ev){
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event:ev,
      animated:true,
    })
    return await popover.present();
  }
}