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
  //variables
  form: FormGroup;
  loading = false;
  nombreUsuario: string;

  
  //importamos en el constructor un router y el constructor del formulario y el snackbar

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

  //si el login es un correcto se lo mostramos al usuario con un snackbar
  error(){
    this._snackBar.open('Usuario o Contraseña INCORRECTOS', "Cerrar", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  //metodo para redirigir al admin
  loadingAdmin(){
    this.loading= true;
    setTimeout(() => {
      this.router.navigate(['/dashboard/dashboardAdmin'])
    }, 2000);
  }

  //metodo para redirigir al usuario
  loadingUser(){
    this.loading= true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 2000);
  }

  //metodo para el acceso a través del servicio para comparar contraseñas. Después según rol se redirige a un sitio o a otro.
  entrar(){
    const usuario= this.form.value.usuario;
    const passwordBBDD= this.form.value.password;
    const rolAdmin = "admin"
    const roluser= "user"
    this._usuariosService.getUsuario(usuario).subscribe(data=>{

      

      if (passwordBBDD == data.password && data.rol == rolAdmin){

       
          this.loadingAdmin()

          
      } else if(passwordBBDD == data.password && data.rol == roluser) {
        this.loadingUser()
      } 

      })
  
    
   



          
      

  }
 
}
