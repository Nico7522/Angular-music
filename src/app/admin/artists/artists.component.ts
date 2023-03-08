import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artsit } from 'src/app/shared/models/artist';
import { ArtistService } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  listArtists: Artsit[] = []
 

  constructor(private _artistService : ArtistService, private _router : Router) {}

  ngOnInit(): void {
    this._artistService.getAll().subscribe({
      next: (res)  => {
        console.log(res)
        this.listArtists = res.results
      }
      
    })

  }

  deleteArtist(id: number){
    this._artistService.delete(id).subscribe({
      error: (error) => {
        console.log(error);
        
        if (error.status === 404) {
          this._router.navigateByUrl('not-found')
          
        }
      },
      complete : () => {
        this._artistService.getAll().subscribe((res) => {this.listArtists = res.results})
      }
    })
  }
}
