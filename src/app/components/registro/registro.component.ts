import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  
  //variables
  formUsuario: FormGroup;


  //importamos en el constructor el servicio, el constructor para el formulari y el router para redirigir 
  constructor(private fb: FormBuilder,private _usuariosService: UsuariosService, private router: Router){
    this.formUsuario = this.fb.group({

      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required]
    
    })

  }


  ngOnInit(): void{
   
  }

  //metodo post para ususario, se crea el objeto y se manda al metodo del servicio
  postUsuario(){

    const usuario: Usuarios = {

      nombre: this.formUsuario.value.nombre,
      primerApellido: this.formUsuario.value.primerApellido ,
      segundoApellido: this.formUsuario.value.segundoApellido ,
      ciudad: this.formUsuario.value.ciudad ,
      email: this.formUsuario.value.email,
      nombreUsuario: this.formUsuario.value.nombreUsuario ,
      password: this.formUsuario.value.password ,
      rol: "user"

    }

    this._usuariosService.postUsuario(usuario).subscribe(()=>{

      console.log("Usuario Registrado");
      
    })

    this.recargaRegistro();

    this.showAlertUsuario();
  }

  //alerta que se muestra tras registro correcto
  showAlertUsuario(){
    Swal.fire('<h1 style="color: red;">Bienvenido! <br> Ya formas parte de HDCM Music!</h1> <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <h3> Encuentra los beats disponibles en el BeatStore </h3> <br> <h4> Puedes consultar tus likes a través de la aplicación móvil, ingresa con tu usuario y ya los tendrás disponibles.</h4> ')
  }

  //método para recargar el resgisto tras realizar el post de usuraio
  recargaRegistro(){
    
    setTimeout(() => {
      this.router.navigate(['/dashboard/beatstore'])
    }, 100);}

  
}