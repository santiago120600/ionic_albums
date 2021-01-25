import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-genres-modal',
  templateUrl: './genres-modal.page.html',
  styleUrls: ['./genres-modal.page.scss'],
})
export class GenresModalPage implements OnInit {
  public genreForm: FormGroup;
  form_sent = false;
  @Input() selected_genre: any;


  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private servicio : ServicesService,
    public toastController: ToastController,
    public alertController: AlertController
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
    if (this.selected_genre) {
      this.genreForm.setValue({
        pGenre: this.selected_genre.genre_name
      });
    }
  }

  async eliminar() {
    const alert = await this.alertController.create({
      header: "Eliminar",
      message: "¿Desea eliminar el genero?",
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
            if (this.selected_genre) {
              var _id = this.selected_genre.concert_id;
              this.servicio.do_delete("genres/api/genres/pid/" + _id).subscribe(data => {
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

  save_genre(){
    this.form_sent = true;
    if (this.genreForm.invalid) {
      return;
    }else{
      if (this.selected_genre) {
        var _id = this.selected_genre.genre_id;
        this.servicio.do_put("genres/api/genres/pid/" + _id, this.genreForm.value).subscribe(data => {
            if ((data.status = 200)) {
              this.dismiss();
              this.show_toast(data.message, "success");
            } else {
              this.dismiss();
              this.show_toast(data.message, "danger");
            }
          });
      }else{
        this.servicio.do_post("genres/api/genres",this.genreForm.value).subscribe(data => 
        {
          if (data.status=200) {
            this.dismiss();  
            this.show_toast(data.message,"success");
          }else{
            this.dismiss();
            this.show_toast(data.message,"danger");
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
