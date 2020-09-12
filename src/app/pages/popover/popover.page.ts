import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }

}
