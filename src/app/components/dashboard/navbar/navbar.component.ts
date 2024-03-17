import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

//variables
menu: Menu[]= [];
matNum=0



  //importamos el servicio del menu
  constructor(private _menuService: MenuService){}

  //cargamos funciones al cargarse la página
  ngOnInit(): void {
    this.cargarMenu();
    this.mostrarDiv();
    this.mostrarUser();
  
    
  }

  
//funcion para cargar el menu a través del servicio
  cargarMenu(){
    this._menuService.getMenu().subscribe(data =>{
      
      this.menu= data;
    
    })
  }

//metodo para vaciar el carrito al apretar el boton
  vaciarCarrito(){
    let bttnCerrarCarrito = document.getElementById('vaciarBut');
    bttnCerrarCarrito!.addEventListener('click',cerrar);
    function cerrar(){
      let divCarrito = document.getElementById('divBeats')!.innerHTML='<p id="atakS" style="color: black;font-size: small;margin-left: 10px;"></p><p id="srS" style="color: black;font-size: small;margin-left: 10px;"></p><p id="bigS" style="color: black;font-size: small;margin-left: 10px;"></p><p id="roomS" style="color: black;font-size: small;margin-left: 10px;"></p><p id="darksS" style="color: black;font-size: small;margin-left: 10px;"></p><p id="callingS" style="color: black;font-size: small;margin-left: 10px;"></p>"';
      let  divCompra2 = document.getElementById('divCompra2')!.innerHTML='<p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="atakF"></p><p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="srF"></p><p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="bigF"></p><p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="roomF"></p><p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="darkSF"></p><p style="color: black;font-size: large;margin-left: 10px;margin-top: 50px;" id="callingF"></p>';
    location.reload();
  }

  }

  
  //metodo para desplegar el carrito cambiando el display a flex
  mostrarDiv(){
    
    
    const bttn = document.getElementById("bttnCompra")
    const bttncerrar = document.getElementById('bttnCerrar')
    bttn!.addEventListener('click', mostrar);
    bttncerrar!.addEventListener('click', cerrar);

    function cerrar(){
      document.getElementById('divCompra')!.style.display= 'none';
    }  
      
    function mostrar(){
      document.getElementById('divCompra')!.style.display= 'flex';

      
    }
   
     

  }


  //metodo para desplegar el div MiCuenta cambiando el display a flex
  mostrarUser(){
    const bttnser = document.getElementById('bttnUser')
    const bttcerrarUser = document.getElementById('bttnCerrarCuenta')
    bttnser!.addEventListener('click', toggles3);
    bttcerrarUser!.addEventListener('click', toggles4);

    function toggles3(){
      document.getElementById('divUser')!.style.display= 'flex';
    }  
      
    function toggles4(){
      document.getElementById('divUser')!.style.display= 'none';

      
    }

  }

}
