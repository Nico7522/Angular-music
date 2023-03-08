import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GenresComponent } from './genres/genres.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UpdateGenreComponent } from './genres/update-genre/update-genre.component';
import { CreateArtistComponent } from './artists/create-artist/create-artist.component';
import { UpdateArtistComponent } from './artists/update-artist/update-artist.component';


@NgModule({
  declarations: [
    AdminComponent,
    GenresComponent,
    ArtistsComponent,
    AlbumsComponent,
    CreateGenreComponent,
    UpdateGenreComponent,
    CreateArtistComponent,
    UpdateArtistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterLink
  ],
  bootstrap : [
    AdminComponent
  ]
})
export class AdminModule { }
