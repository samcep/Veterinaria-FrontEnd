import { NgModule } from '@angular/core';
import { MascotaCardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    MascotaCardComponent,
    ModalComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,



  ],
  exports: [
    MascotaCardComponent,
    ModalComponent,
    SearchComponent
  ]
})
export class MascotasModule { }
