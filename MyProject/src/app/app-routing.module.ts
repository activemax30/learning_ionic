import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'task', loadChildren: './pages/task/task.module#TaskPageModule' },
  { path: 'speakers', loadChildren: './pages/task/speakers/speakers.module#SpeakersPageModule' },
  { path: 'map', loadChildren: './pages/task/map/map.module#MapPageModule' },
  { path: 'about', loadChildren: './pages/task/about/about.module#AboutPageModule' },
  { path: 'oahu', loadChildren: './pages/task/map/oahu/oahu.module#OahuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
