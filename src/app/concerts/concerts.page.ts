import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConcertsModalPage } from '../modals/concerts-modal/concerts-modal.page';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.page.html',
  styleUrls: ['./concerts.page.scss'],
})
export class ConcertsPage implements OnInit {

  concerts_list = [];

  constructor(
    private modalController: ModalController,
    private servicio : ServicesService
  ) { 
    this.load_concerts();
  }

  ngOnInit() {
  }

  async new_concert(){
    const modal = await this.modalController.create({
      component: ConcertsModalPage
    });
    modal.onDidDismiss().then((data)=>{
      this.load_concerts();
    });
    return await modal.present();
  };

  load_concerts(){
    this.servicio.do_get("concerts/api/concerts").subscribe( data => {
      this.concerts_list = data.data;
    });
  }

  async select_concert(_concert){
    const modal = await this.modalController.create({
      component: ConcertsModalPage,
      componentProps : {
        "selected_concert" : _concert
      }
    });
    modal.onDidDismiss().then((data)=>{
      this.load_concerts();
    });
    return await modal.present();
  }

}
