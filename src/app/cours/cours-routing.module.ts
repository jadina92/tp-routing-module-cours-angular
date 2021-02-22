import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammationComponent } from './programmation/programmation.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: 'prog', component: ProgrammationComponent },
  { path: 'web', component: WebComponent },
  { path: '', pathMatch:'full', redirectTo:'prog' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
