import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path : '', component : MusicComponent /*TODO lazyloading children*/},
  { path : 'admin', component : AdminComponent, loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path : 'not-found', component : NotFoundComponent },
  //Attention à toujours mettre la route ** en dernier -> 
    //Correspond à "Si aucun chemin précédemment défini" donc doit être en dessous de tous les chemins
  { path : '**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
