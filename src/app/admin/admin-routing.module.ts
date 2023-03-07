import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { GenresComponent } from './genres/genres.component';
import { UpdateGenreComponent } from './genres/update-genre/update-genre.component';

const routes: Routes = [
  { path : 'genres', component : GenresComponent },
  { path : 'genres/create', component : CreateGenreComponent },
  { path : 'genres/update/:id', component : UpdateGenreComponent },
  { path : 'artists', component : ArtistsComponent },
  { path : 'albums', component : AlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
