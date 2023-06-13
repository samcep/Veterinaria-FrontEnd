import { Component, Input } from '@angular/core';
import { Mascota } from '../../interfaces/ResponseMessage';

@Component({
  selector: 'mascota-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class MascotaCardComponent {
  constructor() { }
  @Input()
  mascota!:  Mascota
  public operationSelected: string = ''

  setOperationSelected(type: string): void {
    switch (type) {
      case "U":
        this.operationSelected =  "U"
        break;
      case "DD":
         this.operationSelected =  "DD"
        break;
      case "D":
         this.operationSelected =  "D"
        break;
      default:
         this.operationSelected =  "N"
    }
  }
}
