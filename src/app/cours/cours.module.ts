import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { ProgrammationComponent } from './programmation/programmation.component';
import { WebComponent } from './web/web.component';


@NgModule({
  declarations: [ProgrammationComponent, WebComponent],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
