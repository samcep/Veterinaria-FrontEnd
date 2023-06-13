import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Especie, Mascota, Propietario, Raza } from '../../interfaces/ResponseMessage';
import { MascotaService } from '../../services/mascota.service';
import { setFormatDate, defaultDate , displayMessage } from '../../helpers/utils';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    //prooperties
  @ViewChild('closebutton') closebutton : any;
  @Input()
  idModal: number = 0
  @Input()
  mascota !: Mascota
  @Input()
  operation: string = ''
  /// fin propiertes

  //Variables
  Especie = Especie
  Raza = Raza
  Propietario = Propietario
  selectEspecie: (string | Especie) [] = [];
  selectRaza: (string | Raza) [] = [];
  selectPropietario: (string | Propietario)[] = [];
  mascotaToCreate !: Mascota
  mascotaToUpdate !: Mascota

  //FIn variables
  constructor(private mascotaService: MascotaService  ) {
    this.selectEspecie=Object.values(this.Especie).filter(value => typeof value === 'string');;
    this.selectRaza=Object.values(this.Raza).filter(value => typeof value === 'string');
    this.selectPropietario = Object.values(this.Propietario).filter(value => typeof value === 'string');

  }

  ngOnInit(): void {
    this.mascotaToUpdate = { ...this.mascota }
      this.mascotaToCreate  =  {
      idMascotaId:       0,
      nombreMascota:     'SOME NAME',
      especie:           Especie.Ave,
      raza:              Raza.Affenpinscherm,
      fechaDeNacimiento:  new Date(this.defaultDate()),
      idPropietario:     1,
    }
  }


  getEspecieValue( epecie : number)  : string {
    return Especie[epecie];
  }
  getRazaValue( raza : number)  : string {
    return Raza[raza];
  }
  getPropietarioValue(propietario: number) {
    return Propietario[propietario]
  }
   deleteMascota(id: number): void {
    this.mascotaService.deleteMacota(id);
    this.callDisplayMessage( "Informacion Eliminada Correctamente" , "success")
    this.closebutton.nativeElement.click();

  }

  formatDate(pvalue: Date): string {
    let valueString= pvalue.toString()
     return setFormatDate(valueString)
  }
  defaultDate(): string {
    return defaultDate();
  }

  crearMascota(mascota: Mascota) {

    this.mascotaService.insertMascota(mascota)
     this.callDisplayMessage( "Informacion Creada Correctamente" , "success")
    this.closebutton.nativeElement.click();
    this.clearMascotaCreate();

  }
  updateMascota(mascota: Mascota) {
    this.mascotaService.updateMascota(mascota.idMascotaId,mascota)
    this.callDisplayMessage( "Informacion Actualizada Correctamente" , "success")
    this.closebutton.nativeElement.click();

  }
  callDisplayMessage(message: string, messageType : string)   : void{
    displayMessage(message , messageType)
  }


  clearMascotaCreate() {
    this.mascotaToCreate.idMascotaId = 0
    this.mascotaToCreate.nombreMascota = 'SOME NAME'
    this.mascotaToCreate.especie = Especie.Ave
    this.mascotaToCreate.raza = Raza.Affenpinscherm
    this.mascotaToCreate.fechaDeNacimiento = new Date(this.defaultDate())
    this.mascotaToCreate.idPropietario = 1
  }
}
