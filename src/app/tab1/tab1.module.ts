import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { DetailsPage } from './details/details.page';
import { Sim } from '@ionic-native/sim/ngx';
import { CallPopoverComponent } from '../call-popover/call-popover.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  entryComponents:[DetailsPage,CallPopoverComponent],
  declarations: [Tab1Page,DetailsPage,CallPopoverComponent],
  providers:[CallNumber,Sim]
})
export class Tab1PageModule {}
