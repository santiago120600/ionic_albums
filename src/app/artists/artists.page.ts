import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArtistsModalPage } from '../modals/artists-modal/artists-modal.page';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  artists_list = [];


  constructor(
    private modalController: ModalController,
    private servicio : ServicesService
    ) { 
      this.load_artists();
    }

  ngOnInit() {
  }

  async new_artist(){
    const modal = await this.modalController.create({
      component: ArtistsModalPage
    });
    modal.onDidDismiss().then((data)=>{
      this.load_artists();
    });
    return await modal.present();
  };

  load_artists(){
    this.servicio.do_get("artists/api/artists").subscribe( data => {
      this.artists_list = data.data;
    });
  }

}
