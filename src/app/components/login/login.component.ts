import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Beats } from 'src/app/interfaces/beats';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  nombreUsuario: string;

  
  

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router,
     private _usuariosService: UsuariosService, private aRoute: ActivatedRoute){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]

     
    })

    this.nombreUsuario= String(this.aRoute.snapshot.paramMap.get('nombreUsuario')); 
  }

  ngOnInit(): void{
   this.entrar();
  }
 /* entrar(){
    const usuario= this.form.value.usuario;
    const password= this.form.value.password;
    if(usuario == 'hdcm' && password =='123'){
              // accedemos a dashboard
              this.fakeloading();

    }else{
              this.error();

    }
  }
**/
  error(){
    this._snackBar.open('Usuario o Contraseña INCORRECTOS', "Cerrar", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  loadingAdmin(){
    this.loading= true;
    setTimeout(() => {
      this.router.navigate(['/dashboard/dashboardAdmin'])
    }, 2000);
  }
  loadingUser(){
    this.loading= true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 2000);
  }

  entrar(){
    const usuario= this.form.value.usuario;
    const passwordBBDD= this.form.value.password;
    const rolAmind = "admin"
    const roluser= "user"
    this._usuariosService.getUsuario(usuario).subscribe(data=>{

      

      if (passwordBBDD == data.password && data.rol == rolAmind){

       
          this.loadingAdmin()

          
      } else if(passwordBBDD == data.password && data.rol == roluser) {
        this.loadingUser()
      } 

      })
  
    
   



          
      

  }
 
}
