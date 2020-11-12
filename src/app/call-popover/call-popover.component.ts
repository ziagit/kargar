import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-call-popover',
  templateUrl: './call-popover.component.html',
  styleUrls: ['./call-popover.component.scss'],
})

export class CallPopoverComponent implements OnInit {
  selected = 'kabul';
  kabul = [
    { name: 'روشن', number: '0728796821' },
    { name: 'اتصالات', number: '0781882821' },
    { name: 'ام تی ان', number: '0775059616' },
    { name: 'افغان بیسم', number: '0793896525' },
    { name: 'سلام', number: '0745340324' },
  ];
  balkh = [
    { name: 'سلام', number: '0745340324' },
    { name: 'افغان بیسم', number: '0793896525' },
    { name: 'ام تی ان', number: '0775059616' },
    { name: 'اتصالات', number: '0781882821' },
    { name: 'روشن', number: '0728796821' },
  ];

  constructor(
    public popoverController: PopoverController,
    public callNumber: CallNumber,
    private storage: Storage,
  ) {}

  ngOnInit() {
    this.storage.get('province').then(value => {
      this.selected = value
      console.log('selected prov', this.selected)
    })
   }

  call(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
