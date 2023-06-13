import { Component, OnInit} from '@angular/core';
import { Mascota } from './mascotas/interfaces/ResponseMessage';
import { MascotaService } from './mascotas/services/mascota.service';
import { displayMessage } from './mascotas/helpers/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {

  constructor(private mascotaService: MascotaService) {}

  title = 'veterinaria-app';
  ngOnInit(): void {
    this.mascotaService.getAllMascotas();

  }

  get allMascotas(): Mascota[] {
    return this.mascotaService.getlistMascotas
  }


}
