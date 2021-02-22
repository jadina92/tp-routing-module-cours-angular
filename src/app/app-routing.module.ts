import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent },

  { path: 'ressources', component: RessourcesComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'cours', loadChildren: './cours/cours.module#CoursModule'},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
