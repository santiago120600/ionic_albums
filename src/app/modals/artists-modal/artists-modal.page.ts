import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-artists-modal',
  templateUrl: './artists-modal.page.html',
  styleUrls: ['./artists-modal.page.scss'],
})
export class ArtistsModalPage implements OnInit {

  public artistForm: FormGroup;
  form_sent = false;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService,
    public toastController: ToastController
  ) { 
    this.artistForm = this.formBuilder.group({

      pName : new FormControl('', Validators.compose(
        [
          Validators.required
        ]
      ))
    });
  }

  ngOnInit() {
  }

  save_artist(){
    this.form_sent = true;
    if (this.artistForm.invalid) {
      return;
    }else{
      this.servicio.do_post("artists/api/artists",this.artistForm.value).subscribe(data => 
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
