import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlbumsModalPage } from '../modals/albums-modal/albums-modal.page';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  constructor(
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async new_album(){
    const modal = await this.modalController.create({
      component: AlbumsModalPage
    });
    modal.onDidDismiss().then((data)=>{
      // nada
    });
    return await modal.present();
  };

}
