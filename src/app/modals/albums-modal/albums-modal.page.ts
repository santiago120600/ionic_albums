import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';

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
    private servicio : ServicesService,
    public toastController: ToastController
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
      this.servicio.do_post("albums/api/albums",this.albumForm.value).subscribe(data => 
      {
        
        if (data.status=200) {
          this.dismiss();  
          this.show_toast(data.message,"success");
        }else{
          this.dismiss();
          this.show_toast(data.message,"error");
        }
      });
    }
  }

  async show_toast(_message,_color){
    const toast = await this.toastController.create({
      message: _message,
      duration: 2000,
      color: _color
    });
    toast.present();
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed':  true
    });
  }

}
