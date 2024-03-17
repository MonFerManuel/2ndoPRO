import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  //metodo para procesar el pago y redirigir
  procesoPago(){
  let btnPago = document.getElementById('btnPago');
  let divPago = document.getElementById('divBeats');

    btnPago!.addEventListener('click',pagar);

      function pagar(){
        setInterval("location.reload()",1000);
        //divPago!.innerHTML='<p></P>';
        
      }
    
}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
