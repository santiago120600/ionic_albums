import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-artists-modal',
  templateUrl: './artists-modal.page.html',
  styleUrls: ['./artists-modal.page.scss'],
})
export class ArtistsModalPage implements OnInit {

  public artistForm: FormGroup;
  form_sent = false;
  @Input selected_artist: any;


  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService,
    public toastController: ToastController,
    public alertController: AlertController
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
    if (this.selected_artist) {
      this.artistForm.setValue({
        pName: this.selected_artist.artist_name
      });
    }
  }

  async eliminar() {
    const alert = await this.alertController.create({
      header: "Eliminar",
      message: "¿Desea eliminar el artista?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "danger",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Si",
          handler: () => {
            if (this.selected_artist) {
              var _id = this.selected_artist.artist_id;
              this.servicio.do_delete("artists/api/artists/pid/" + _id, this.artistForm.value).subscribe(data => {
                  if ((data.status = 200)) {
                    this.dismiss();
                    this.show_toast(data.message, "success");
                  } else {
                    this.dismiss();
                    this.show_toast(data.message, "danger");
                  }
                });
            }
          }
        }
      ]
    });
    await alert.present();
  }

  save_artist(){
    this.form_sent = true;
    if (this.artistForm.invalid) {
      return;
    }else{
      if (this.selected_artist) {
        var _id = this.selected_artist.artist_id;
        this.servicio
          .do_put("artists/api/artists/pid/" + _id, this.artistForm.value)
          .subscribe(data => {
            if ((data.status = 200)) {
              this.dismiss();
              this.show_toast(data.message, "success");
            } else {
              this.dismiss();
              this.show_toast(data.message, "danger");
            }
          });
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
