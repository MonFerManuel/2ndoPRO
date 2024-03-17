import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardContent } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Beats } from 'src/app/interfaces/beats';
import { BeatService } from 'src/app/services/beats.service';


import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LikesService } from 'src/app/services/likes.service';
import { Likes } from 'src/app/interfaces/likes';
import { MatBadge } from '@angular/material/badge';




@Component({
  selector: 'app-beatstore',
  templateUrl: './beatstore.component.html',
  styleUrls: ['./beatstore.component.css']
})
export class BeatstoreComponent implements OnInit, AfterViewInit {

  //VARIABLES
  displayedColumns: string[] = [ 'nombre','bpm', 'typeBeat', 'mood', 'escala'];
  texto: String = "";
  variable: any = "";
  dataSource = new MatTableDataSource<Beats>;
  listBeats!: Beats[];
  formLike: FormGroup;
  nombreBeat: String="";
  matBadge: number = 3;

//METODOS PARA AGREGAR BEATS AL CARRITO
  carritoBeat(){
    
      
    
      let bttn2 = document.getElementById('bttnAtak');
  
      bttn2!.addEventListener('click', addBeat);
        
      function addBeat(){
       
        let div = document.getElementById('atakS')!.innerHTML= 'atak Ski Mask type beat           Precio: 10$'
        
        
      }
      let pagarBut = document.getElementById('pagarBut');
      pagarBut!.addEventListener('click', pagar);
      function pagar(){
      let div2 = document.getElementById('atakF')!.innerHTML= ' atak Ski Mask type beat       Precio: 10$'
      }

      this.aumentarBadge();
  }
  carritoBeat2(){
  let bttn3 = document.getElementById('bttnSr');
      
    
  
      bttn3!.addEventListener('click', addBeatSr);
        
      function addBeatSr(){
       
        let div3 = document.getElementById('srS')!.innerHTML= 'Sad reggaeton Bad Bunny type beat           Precio: 10$'
        
        
      }
      let pagarButo2 = document.getElementById('pagarBut');
      pagarButo2!.addEventListener('click', pagar2);
      function pagar2(){
        let div4 = document.getElementById('srF')!.innerHTML= ' Sad reggaeton Bad Bunny type beat           Precio: 10$'
      }
  }
  carritoBeat3(){
      let bttn4 = document.getElementById('bttnBig');
          
        
      
          bttn4!.addEventListener('click', addBeatBig);
            
          function addBeatBig(){
           
            let div5 = document.getElementById('bigS')!.innerHTML= ' Big Drake x lil baby type beat          Precio: 10$'
            
            
          }
          let pagarButo3 = document.getElementById('pagarBut');
          pagarButo3!.addEventListener('click', pagar3);
          function pagar3(){
            let div4 = document.getElementById('bigF')!.innerHTML= ' Big Drake x lil baby type beat          Precio: 10$'
          }
  }
  carritoBeat4(){
          let bttn5 = document.getElementById('bttnRoom');
              
            
          
              bttn5!.addEventListener('click', addBeatRoom);
                
              function addBeatRoom(){
               
                let div6 = document.getElementById('roomS')!.innerHTML= ' Room Tyga type beat          Precio: 10$'
                
                
              }
              let pagarButo4 = document.getElementById('pagarBut');
              pagarButo4!.addEventListener('click', pagar4);
              function pagar4(){
                let div7 = document.getElementById('roomF')!.innerHTML= ' Room Tyga type beat                Precio: 10$'
              }
  }
  carritoBeat5(){
              let bttn6 = document.getElementById('bttnDarkS');
                  
                
              
                  bttn6!.addEventListener('click', addBeatDarkS);
                    
                  function addBeatDarkS(){
                   
                    let div7 = document.getElementById('darksS')!.innerHTML= ' Dark Souls Drake x travis scott type beat          Precio: 10$'
                    
                    
                  }
                  let pagarButo5 = document.getElementById('pagarBut');
                  pagarButo5!.addEventListener('click', pagar5);
                  function pagar5(){
                    let div8 = document.getElementById('darkSF')!.innerHTML= ' Dark Souls Drake x travis scott type beat                Precio: 10$'
                  }
  }
  carritoBeat6(){
                  let bttn7 = document.getElementById('bttnCalling');
                      
                    
                  
                      bttn7!.addEventListener('click', addBeatCalling);
                        
                      function addBeatCalling(){
                       
                        let div9 = document.getElementById('callingS')!.innerHTML= ' Calling southside 808 mafia type beat          Precio: 10$'
                        
                        
                      }
                      let pagarButo6 = document.getElementById('pagarBut');
                      pagarButo6!.addEventListener('click', pagar5);
                      function pagar5(){
                        let div10 = document.getElementById('callingF')!.innerHTML= ' Calling southside 808 mafia type beat          Precio: 10$'
                      }
  }



  //ALERTAS PARA BEATS
  showAlertDefault(){
      Swal.fire('<h1 style="color: red;">El nombre escrito para beat/usuario no corresponde con ninguno registrado <br> </h1> <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <h4> Si todavía no estás registrado puedes hacerlo a través de la página de login</h4> ')
    }
  showAlertAtak(){
      Swal.fire('atak añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/U5hWWYl_MRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }

  showAlertSr(){
      Swal.fire('Sad reggaeton añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/EkgC5bdVCS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }
  showAlertRoom(){
      Swal.fire('Room añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/pxsZ35I5POA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }

  showAlertDarkS(){
      Swal.fire('Dark Souls  añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/mrvlgYzEwEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }
  showAlertBig(){
      Swal.fire('Big añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/Vi9C5tc4hpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }

  showAlertCalling(){
      Swal.fire('Calling añadido a MeGusta! <br> No esperes para comprarlo! <br> <img src="../../../../assets/img/fotor_2023-2-26_12_25_48.png" style="height: 60px; width: 60px;"> <br> <iframe width="200" height="200" src="https://www.youtube.com/embed/W34pH-Je5zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    }



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

//pasamos al constructor el servicio de beats y likes y el constructor de formularios
  constructor(private _beatService: BeatService, private fb: FormBuilder, private _likesService: LikesService){

    this.formLike = this.fb.group({

      nombreusuario: ['', Validators.required],
      nombrebeat: ['', Validators.required ]

     
    })

  }

  //inicialimos el metodo al carga la pagina para mostrar los beats
  ngOnInit(): void{
    
   
    this.obtenerBeats();
    
    
    
    
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
    
  }

  //filtramos los datos del datasoutce
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //metodo para obtener los beats disponibles en bbdd y los renderizamos en tabla
  obtenerBeats(){
    this._beatService.getBeats().subscribe(data=> {
      this.dataSource.data=data;
      
      
    })
    
  }

  /*listBeats2(){
    
    this._beatService.getBeats().subscribe(data=> {
    
       
    data.forEach((instru: { url: any; })=>{

      
   
    if(document.getElementById('gridList') == null){

          document.getElementById('gridList')!.style.display= "none";
      
        
        }
   
      })
      
    })
  
}*/

//metodo para desplegar el panel de like para el beat atak
  inicioLikeAtak(){
    const bttnLikeSr = document.getElementById("likeAtak")
    const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
    bttnLikeSr!.addEventListener('click', mostrarLike);
    bttncerrarLikeSr!.addEventListener('click', cerrarLike);

    function cerrarLike(){
      document.getElementById('divMeGusta')!.style.display= 'none';
    }  
      
    function mostrarLike(){
      document.getElementById('divMeGusta')!.style.display= 'flex';

      
    }
    
    
    
  }

  //metodo para guardar like tras introducir datos, el método llama al servicio de likes
  guardarLike(){
    this.nombreBeat = this.formLike.value.nombreusuario;
     const like: Likes = {

      nombreUsuario: this.formLike.value.nombreusuario,
      nombreBeat: this.formLike.value.nombrebeat
      
    }
    

    this._likesService.putLike(like).subscribe(data=>{

      

      if(data.nombreBeat == "atak"){
      
        this.showAlertAtak();
  
      }else if(data.nombreBeat == "Sad reggaeton"){
      
      this.showAlertSr();
      
      }else if(data.nombreBeat == "Dark souls"){
      
        this.showAlertDarkS();
        
      }else if(data.nombreBeat == "calling"){
      
          this.showAlertCalling();
          
      }else if(data.nombreBeat == "Big"){
      
        this.showAlertBig();
        
      }else if(data.nombreBeat == "room"){
      
        this.showAlertRoom();
        
      }else{
        this.showAlertDefault();
      }
      
     
    })
  }
  

    
//metodo para desplegar el panel de like para el beat Sad Reggaeton
  inicioLikeSr(){
      const bttnLikeSr = document.getElementById("likeSr")
      const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
      bttnLikeSr!.addEventListener('click', mostrarLike);
      bttncerrarLikeSr!.addEventListener('click', cerrarLike);
  
      function cerrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'none';
      }  
        
      function mostrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'flex';
  
        
      }
      
      
      
    }
  
//metodo para desplegar el panel de like para el beat big
  inicioLikeBig(){
      const bttnLikeSr = document.getElementById("likeBig")
      const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
      bttnLikeSr!.addEventListener('click', mostrarLike);
      bttncerrarLikeSr!.addEventListener('click', cerrarLike);
  
      function cerrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'none';
      }  
        
      function mostrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'flex';
  
        
      }
      
      
      
    }
  
//metodo para desplegar el panel de like para el beat room
  inicioLikeRoom(){
      const bttnLikeSr = document.getElementById("likeRoom")
      const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
      bttnLikeSr!.addEventListener('click', mostrarLike);
      bttncerrarLikeSr!.addEventListener('click', cerrarLike);
  
      function cerrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'none';
      }  
        
      function mostrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'flex';
  
        
      }
      
      
      
    }
  
//metodo para desplegar el panel de like para el beat dark souls
  inicioLikeDS(){
      const bttnLikeSr = document.getElementById("likeDS")
      const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
      bttnLikeSr!.addEventListener('click', mostrarLike);
      bttncerrarLikeSr!.addEventListener('click', cerrarLike);
  
      function cerrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'none';
      }  
        
      function mostrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'flex';
  
        
      }
      
      
      
    }

//metodo para desplegar el panel de like para el beat calling
  inicioLikeCalling(){
      const bttnLikeSr = document.getElementById("likeCalling")
      const bttncerrarLikeSr = document.getElementById('bttnCerrarLikeSr')
      bttnLikeSr!.addEventListener('click', mostrarLike);
      bttncerrarLikeSr!.addEventListener('click', cerrarLike);
  
      function cerrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'none';
      }  
        
      function mostrarLike(){
        document.getElementById('divMeGusta')!.style.display= 'flex';
  
        
      }
      
      
      
    }
//metodo para aumentar el numero de items en carrito
  aumentarBadge(){
    /*let badge = document.getElementById("bttnBadge");
    let badgeValue = parseInt(badge!.innerText );
    let num = "1"
    badge!.innerText = "num";*/
    
    let badge = document.getElementById("bttnBadge");
    console.log(badge!.getAttribute('matBadge'));
    badge!.setAttribute('matBadge', '1');
    
    console.log(badge!.getAttribute('matBadge'));
    //badge!.innerText = (parseInt(badge!.innerText) + 1).toString();
    
  }
    
} 

  



