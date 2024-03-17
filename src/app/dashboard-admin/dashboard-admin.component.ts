import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Beats } from 'src/app/interfaces/beats';
import { BeatService } from 'src/app/services/beats.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../interfaces/usuarios';
import {  Router } from '@angular/router';
import { MatGridList } from '@angular/material/grid-list';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit, AfterViewInit {
  //variables
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  formUsuarioAdmin: FormGroup;

  //datos para las columnas de las tablas
  displayedColumns: string[] = ['nombreBeat','escala','bpm', 'typeBeat', 'mood'];
  displayedColumns2: string[] = ['nombre','primerApellido','segundoApellido', 'ciudad', 'email', 'nombreUsuario', 'password', 'rol'];

  dataSource = new MatTableDataSource<Beats>;
  dataSource2 = new MatTableDataSource<Usuarios>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //a través del constructor inicializamos los formularios 
  constructor(private _beatService: BeatService, private fb: FormBuilder,private router: Router, private _usuariosService: UsuariosService){
    this.form = this.fb.group({
      nombreBeat: ['', Validators.required],
      escala: ['', Validators.required],
      typeBeat: ['', Validators.required],
      mood: ['', Validators.required],
      bpm: ['', Validators.required],
      url: ['', Validators.required]
    })

    this.form2= this.fb.group({
      nombreBeat: ['', Validators.required]
    })

    this.form3= this.fb.group({
      nombreBeat: ['', Validators.required],
      escala: ['', Validators.required],
      typeBeat: ['', Validators.required],
      mood: ['', Validators.required],
      bpm: ['', Validators.required],
      url: ['', Validators.required]
    })
    this.formUsuarioAdmin = this.fb.group({

      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required]

    })

   
  }

  //inicializamos las funciones al cargarse la web 
  ngOnInit(): void{
    
    this.obtenerBeats();
    this.actualizarBeats();
    this.eliminar();
    this.obtenerUsuarios();
    
  
   
  }

  //cargamos el elemento paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
    
  }

  //establecemos los filtros de búsqueda a través de la lista de elementos devuelta por el servicio
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(event2: Event) {
    const filterValue2 = (event2.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue2.trim().toLowerCase();
  }

  //Función para recuperar los beats a través del servicio y lo seteamos como datos del datasource para las tablas
  obtenerBeats(){
    this._beatService.getBeats().subscribe(data=> {
      this.dataSource.data=data;
      
    })
  }
 //metodo para hacer un post a traves del servicio
  subirBeats(){
    const beat: Beats = {
      url: this.form.value.url,
      nombreBeat: this.form.value.nombreBeat,
      escala: this.form.value.escala,
      bpm: this.form.value.bpm,
      mood: this.form.value.mood,
      typeBeat: this.form.value.typeBeat
    }

    this._beatService.putBeat(beat).subscribe(data=>{
      console.log(data)
     
    })
  }

  //metodo para actualizar los beats
  actualizarBeats(){
    const nombreBeat =  this.form3.value.nombreBeat
    const beat1: Beats = {
      url: this.form3.value.url,
      nombreBeat: this.form3.value.nombreBeat,
      escala: this.form3.value.escala,
      bpm: this.form3.value.bpm,
      mood: this.form3.value.mood,
      typeBeat: this.form3.value.typeBeat
    }
    
    this._beatService.updateBeat( beat1, nombreBeat).subscribe(data=>{
      console.log(data)
     
    })
    

    
  } 

  //metodo para eliminar los beats al pasarle el nombre del beat
  eliminar(){
    const nombreBeat =  this.form2.value.nombreBeat
    
    
    
   this._beatService.deleteBeat(nombreBeat).subscribe(data=> {
      console.log(data)
     })    
   }

   //metodo para hacer un POST de usuario
  nuevoUsuario(){
   const usuario: Usuarios = {

    nombre: this.formUsuarioAdmin.value.nombre,
    primerApellido: this.formUsuarioAdmin.value.primerApellido ,
    segundoApellido: this.formUsuarioAdmin.value.segundoApellido ,
    ciudad: this.formUsuarioAdmin.value.ciudad ,
    email: this.formUsuarioAdmin.value.email,
    nombreUsuario: this.formUsuarioAdmin.value.nombreUsuario ,
    password: this.formUsuarioAdmin.value.password ,
    rol: this.formUsuarioAdmin.value.rol

    }

    console.log(usuario);

     this._usuariosService.postUsuario(usuario).subscribe(data =>{
      console.log(data);

    }) 

    this.showAlertUsuarioNew();
  }

  //funcion para mostrar alerta de usuario creado correctamente
  showAlertUsuarioNew(){
    Swal.fire('<h1 style="color: red;">{usuario.nombre} Añadido!  </h1> <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <h3> Encuentra los beats disponibles en el BeatStore </h3> <br> <h4> Puedes consultar tus likes a través de la aplicación móvil, ingresa con tu usuario y ya los tendrás disponibles.</h4> ')
  }

  //GET de usuarios
  obtenerUsuarios(){
    this._usuariosService.getUsuarios().subscribe(data=> {
      this.dataSource2.data=data;
      console.log(data);
    })
  }
  

}


