import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-albums-modal',
  templateUrl: './albums-modal.page.html',
  styleUrls: ['./albums-modal.page.scss'],
})
export class AlbumsModalPage implements OnInit {

  public albumForm: FormGroup;
  form_sent = false;
  artists_list = [];
  genres_list = [];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService
  ) {
    this.albumForm = this.formBuilder.group({

      pName : new FormControl('', Validators.compose(
        [
          Validators.required
        ]
      )),
      pDate : new FormControl('', Validators.compose( 
        [
          Validators.required
        ]
      )),
      pTime : new FormControl('', Validators.compose(
        [
          Validators.required
       ]
      )),
      pArtists : new FormControl('', Validators.compose(
        [
         Validators.required
        ]
      )),
      pGenre : new FormControl('', Validators.compose(
        [
          Validators.required
        ]
      ))
    });

    this.load_artists();
    this.load_genres();
   }

   load_artists(){
    this.servicio.do_get("artists/api/artists").subscribe(data => {
      // console.info(data);
      this.artists_list = data.data;
    });
   }

   load_genres(){
    this.servicio.do_get("genres/api/genres").subscribe(data => {
      // console.info(data);
      this.genres_list = data.data;
    });
   }

  ngOnInit() {
  }

  save_album(){
    this.form_sent = true;
    if (this.albumForm.invalid) {
      return;
    }else{
      // no se
    }
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed':  true
    });
  }

}
