import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'albums-modal',
    loadChildren: () => import('./modals/albums-modal/albums-modal.module').then( m => m.AlbumsModalPageModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./genres/genres.module').then( m => m.GenresPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'genres-modal',
    loadChildren: () => import('./modals/genres-modal/genres-modal.module').then( m => m.GenresModalPageModule)
  },
  {
    path: 'artists-modal',
    loadChildren: () => import('./modals/artists-modal/artists-modal.module').then( m => m.ArtistsModalPageModule)
  },
  {
    path: 'concerts-modal',
    loadChildren: () => import('./modals/concerts-modal/concerts-modal.module').then( m => m.ConcertsModalPageModule)
  },
  {
    path: 'concerts',
    loadChildren: () => import('./concerts/concerts.module').then( m => m.ConcertsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
