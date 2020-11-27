import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-genres-modal',
  templateUrl: './genres-modal.page.html',
  styleUrls: ['./genres-modal.page.scss'],
})
export class GenresModalPage implements OnInit {
  public genreForm: FormGroup;
  form_sent = false;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService,
    public toastController: ToastController
  ) {
    this.genreForm = this.formBuilder.group({

      pGenre : new FormControl('', Validators.compose(
        [
          Validators.required
        ]
      ))
    });
    
   }

  ngOnInit() {
  }

  save_genre(){
    this.form_sent = true;
    if (this.genreForm.invalid) {
      return;
    }else{
      this.servicio.do_post("genres/api/genres",this.genreForm.value).subscribe(data => 
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
