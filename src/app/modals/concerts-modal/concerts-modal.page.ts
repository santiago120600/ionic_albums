import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-concerts-modal',
  templateUrl: './concerts-modal.page.html',
  styleUrls: ['./concerts-modal.page.scss'],
})
export class ConcertsModalPage implements OnInit {

  public concertForm: FormGroup;
  form_sent = false;
  artists_list = [];
  
  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService,
    public toastController: ToastController
  ) {
    this.concertForm = this.formBuilder.group({

      pTitle : new FormControl('', Validators.compose(
        [
          Validators.required
        ]
      )),
      pDate : new FormControl('', Validators.compose( 
        [
          Validators.required
        ]
      )),
      pPlace : new FormControl('', Validators.compose(
        [
          Validators.required
       ]
      )),
      pArtists : new FormControl('', Validators.compose(
        [
         Validators.required
        ]
      ))
    });

    this.load_artists();
   }

   load_artists(){
    this.servicio.do_get("artists/api/artists").subscribe(data => {
      // console.info(data);
      this.artists_list = data.data;
    });
   }


  ngOnInit() {
  }

  save_concert(){
    this.form_sent = true;
    if (this.concertForm.invalid) {
      return;
    }else{
      this.servicio.do_post("concerts/api/concerts",this.concertForm.value).subscribe(data => 
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
