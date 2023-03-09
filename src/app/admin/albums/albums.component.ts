import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/shared/models/album';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  listAlbum: Album[] = []
  // listAlbumT: Album[] = []
  constructor(private _albumService : AlbumService, private _router : Router) {}

  ngOnInit(): void {
    this._albumService.getAll().subscribe({
      next : (res) => {
        this.listAlbum = res.results
        // console.log(res.results[5].cover.substring(11));
    
        //     this.listAlbum.map(elem => {
        //       console.log(elem.cover.substring(11));
        //       const i = elem.cover.substring(11)
        //       return i
              
        //     });
      
     
        
        
      }
    })
  }

  deleteAlbum(id: number) {
    this._albumService.delete(id).subscribe({
      error: () => {
        this._router.navigateByUrl('/admin/albums')
      },
      complete: () => {
        this._albumService.getAll().subscribe((res) => { this.listAlbum = res.results})
        
      }
    })
  }


}
