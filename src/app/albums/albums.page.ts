import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlbumsModalPage } from '../modals/albums-modal/albums-modal.page';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  albums_list = [];

  constructor(
    private modalController: ModalController,
    private servicio : ServicesService
    ) { 
      this.load_albums();
    }

  ngOnInit() {
  }

  async new_album(){
    const modal = await this.modalController.create({
      component: AlbumsModalPage
    });
    modal.onDidDismiss().then((data)=>{
      this.load_albums();
    });
    return await modal.present();
  };

  load_albums(){
    this.servicio.do_get("albums/api/albums").subscribe( data => {
      this.albums_list = data.data;
    });
  }

}
