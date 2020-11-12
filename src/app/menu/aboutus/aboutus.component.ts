import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  kargar=`افزایش کار و مشغله های زندگی امروز، وقت زیادی از ما گرفته و میگرند و روز به روز رو به افزایش می باشد. و این باعث کمبود وقت شده و ما را از انجام اکثر کارهای مهم زندگی باز می دارد.
  کارگر برای مرفع ساختن این نیازمندی ها ایجاد شد، تا هموطنان ما در هیچ شرایط، فرصتی را از دست نداده و همچنان از انجام آن کار های مهم و ضروری غافل نشوند.
  با استفاده از این اپلیکشن شما می توانید به راحتی و آسانی با افراد مسکلی و با تجربه در ارتباط بوده و از تجربه و مسلک شان استفاده نمائید.
 
  `;
  policy=`1. دانلود، نصب و استفاده از اپلیکشن کارگر رایگان بوده، ولی از بابت اجرای کار توسط متخصص درخواست شده، هزینه¬ی آنرا باید پرداخت نمائید.
  2. مشتریان عزیز که نیروی کاری در منزل، دفتر و محل کار شان درخواست می نمایند، مکلف به حفظ و نگهداری اجناس گم شدنی شان می باشند. در صورت گم شدن اجناس شان کارگر مسولیت ندارد. 
  3. اپلیکشن کارگر دارای اعلانات تبلیغاتی بوده که از طرف گوگل نشان داده می شود، کارگر در مورد محتوای آن تبلیغات نظری ندارد.
  
  `;
  myapp: string='my App';
  constructor( public modalController: ModalController,
    public socialShare: SocialSharing,) { }

  ngOnInit() {}

  share(){
   this.socialShare.shareViaWhatsApp('myapp');
  }
  close(){
    this.modalController.dismiss()
  }
}
