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

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;


  displayedColumns: string[] = ['nombreBeat','escala','bpm', 'typeBeat', 'mood'];

  dataSource = new MatTableDataSource<Beats>;
  //dataSource2 = new MatTableDataSource<Usuarios>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _beatService: BeatService, private fb: FormBuilder,private router: Router){
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

   
  }

  ngOnInit(): void{
    
    this.obtenerBeats();
    this.actualizarBeats();
    this.eliminar();
    
  
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerBeats(){
    this._beatService.getBeats().subscribe(data=> {
      this.dataSource.data=data;
      console.log(data);
    })
  }

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

  eliminar(){
    const nombreBeat =  this.form2.value.nombreBeat
    
    
    
   this._beatService.deleteBeat(nombreBeat).subscribe(data=> {
      console.log(data)
     })    
   }

  nuevoUsuario(){

  }

}
