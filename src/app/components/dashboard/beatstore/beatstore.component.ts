import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardContent } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Beats } from 'src/app/interfaces/beats';
import { BeatService } from 'src/app/services/beats.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-beatstore',
  templateUrl: './beatstore.component.html',
  styleUrls: ['./beatstore.component.css']
})
export class BeatstoreComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ 'nombre','bpm', 'typeBeat', 'mood', 'escala'];

  dataSource = new MatTableDataSource<Beats>;
  listBeats!: Beats[];
  safeSrc: SafeResourceUrl;

  url= "https://www.youtube.com/embed/EkgC5bdVCS8"

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _beatService: BeatService, private sanitizer: DomSanitizer){

    
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  
  }

  ngOnInit(): void{
    
    this.listBeats2();
    this.obtenerBeats();
    
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
      
      
    })
    
  }

  listBeats2(){
    
    this._beatService.getBeats().subscribe(data=> {
    
       
    data.forEach((instru: { url: any; })=>{

      
   
    if(document.getElementById('gridList') == null){

          document.getElementById('gridList')!.style.display= "none";
      
        
        }
   
      })
      
    })
  
}

}
