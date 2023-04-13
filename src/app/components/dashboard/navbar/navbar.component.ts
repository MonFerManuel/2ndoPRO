import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
menu: Menu[]= [];

  constructor(private _menuService: MenuService){}

  ngOnInit(): void {
    this.cargarMenu();
    this.mostrarDiv();
    this.mostrarUser();
    
  }

  

  cargarMenu(){
    this._menuService.getMenu().subscribe(data =>{
      
      this.menu= data;
    
    })
  }

  mostrarDiv(){

    
    const bttn = document.getElementById("bttnCompra")
    const bttncerrar = document.getElementById('bttnCerrar')
    bttn!.addEventListener('click', toggles);
    bttncerrar!.addEventListener('click', toggle2);

    function toggle2(){
      document.getElementById('divCompra')!.style.display= 'none';
    }  
      
    function toggles(){
      document.getElementById('divCompra')!.style.display= 'flex';

      
    }
   
     

  }

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
