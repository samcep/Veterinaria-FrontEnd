import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse  , HttpHeaders} from '@angular/common/http';
import { Mascota, ResponseMessage } from '../interfaces/ResponseMessage';
import { Observable, catchError, throwError } from 'rxjs';
import { displayMessage } from '../helpers/utils';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private httpClient: HttpClient) {}
  private urlBase: string = "https://localhost:7295"
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private listMascotas: Mascota[] = [];
  public message: string = "";
  public messageType: string = "";
  get getlistMascotas() : Mascota[]{
    return [...this.listMascotas];
  }

  get getMessage() : string{
    return this.message;
  }
  get getMessageType() : string{
    return this.messageType;
  }


  getAllMascotas()  : void {
    this.httpClient.get<ResponseMessage>(`${this.urlBase}/Mascota`)
      .pipe( catchError(this.handleError))
      .subscribe((resp) => {
          this.listMascotas = resp.data
      })
  }
  getMascotaById(mascotaId : number)  : void {
    this.httpClient.get<ResponseMessage>(`${this.urlBase}/Mascota/${mascotaId}`)
      .pipe( catchError(this.handleError))
      .subscribe((resp ) => {
        if (!resp.data) {
          displayMessage("No se encontro informacion" , "warning")
        } else {
          this.listMascotas = resp.data
        }
      })
  }

  deleteMacota(id: number)  {
    this.httpClient.delete<ResponseMessage>(`${this.urlBase}/Mascota/${id}`)
      .pipe( catchError(this.handleError))
      .subscribe((resp: ResponseMessage) => {
       this.message = resp.message;
        this.messageType = resp.messageType
        this.getAllMascotas()
      })


  }

   insertMascota(mascota: Mascota) {
     this.httpClient.post<ResponseMessage>(`${this.urlBase}/Mascota`, mascota)
        .pipe( catchError(this.handleError))
       .subscribe((resp: ResponseMessage) => {
        this.message = resp.message;
        this.messageType = resp.messageType
        this.getAllMascotas()
      })
   }
    updateMascota(id: number, data: any){
      this.httpClient.put<ResponseMessage>(`${this.urlBase}/Mascota/${id}`, data)
        .pipe( catchError(this.handleError))
        .subscribe((resp: ResponseMessage) => {
        this.message = resp.message;
        this.messageType = resp.messageType
        this.getAllMascotas()
    })
  }



   handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
      displayMessage("Por favor validar informacion", "error")
      console.error('An error occurred:', error.error.message);
     } else {
             displayMessage("Por favor validar informacion", "error")
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
     }
     displayMessage("Por favor validar informacion", "error")
     return throwError(

      'Something bad happened; please try again later.');
  };
}
