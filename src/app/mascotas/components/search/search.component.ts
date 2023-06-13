import { Component } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public mascotaId: number = 0

  constructor(private mascotaService : MascotaService){}


  serchMasccotaById() : void{
    this.mascotaService.getMascotaById(this.mascotaId);
  }

  clearFilter(): void{
    this.mascotaId = 0;
    this.mascotaService.getAllMascotas();
  }

}
