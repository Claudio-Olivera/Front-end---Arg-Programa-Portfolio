import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerServ:NgxSpinnerService) { }

  public llamarSpinner(){
    this.spinnerServ.show();
  }

  public detenerSpinner(){
    this.spinnerServ.hide();
  }
}
