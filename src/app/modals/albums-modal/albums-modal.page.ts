import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-albums-modal',
  templateUrl: './albums-modal.page.html',
  styleUrls: ['./albums-modal.page.scss'],
})
export class AlbumsModalPage implements OnInit {

  public albumForm: FormGroup;
  form_sent = false;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
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
