import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../services/services.service';
import { GenresModalPage } from '../modals/genres-modal/genres-modal.page';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  genres_list = [];

  constructor(
    private modalController: ModalController,
    private servicio : ServicesService
  ) { 
    this.load_genres();

  }

  ngOnInit() {
  }

  async new_genre(){
    const modal = await this.modalController.create({
      component: GenresModalPage
    });
    modal.onDidDismiss().then((data)=>{
      this.load_genres();
    });
    return await modal.present();
  };

  load_genres(){
    this.servicio.do_get("genres/api/genres").subscribe( data => {
      this.genres_list = data.data;
    });
  }

}
