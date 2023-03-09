import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './albums/create-album/create-album.component';
import { ArtistsComponent } from './artists/artists.component';
import { CreateArtistComponent } from './artists/create-artist/create-artist.component';
import { UpdateArtistComponent } from './artists/update-artist/update-artist.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { GenresComponent } from './genres/genres.component';
import { UpdateGenreComponent } from './genres/update-genre/update-genre.component';

const routes: Routes = [
  { path : 'genres', component : GenresComponent },
  { path : 'genres/create', component : CreateGenreComponent },
  { path : 'genres/update/:id', component : UpdateGenreComponent },
  { path : 'artists', component : ArtistsComponent },
  { path : 'artists/create', component : CreateArtistComponent },
  { path : 'artists/update/:id', component : UpdateArtistComponent },
  { path : 'albums', component : AlbumsComponent },
  { path : 'albums/create', component : CreateAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
