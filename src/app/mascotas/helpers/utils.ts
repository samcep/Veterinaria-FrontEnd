import moment from 'moment';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Mascota } from '../interfaces/ResponseMessage';
export const setFormatDate = (pvalue: string): string => {
   return moment(pvalue).format("DD/MM/YYYY")
}

export const defaultDate = (): string => {
    return moment(new Date()).format("MM/DD/YYYY")
}

export const displayMessage = (message: string,  messageType: string , data?: Mascota,): void => {
  console.log('tipo de mesange'  , messageType)
  if (messageType.toString().toLowerCase() == "success") {

    Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: message,
       showConfirmButton: false,
       timer: 1500
       })
  } else if (messageType.toString().toLowerCase() == "warning") {
      Swal.fire({
       position: 'top-end',
       icon: 'warning',
       title: message,
       showConfirmButton: false,
       timer: 1500
       })
  }else {
       Swal.fire({
       position: 'top-end',
       icon: 'error',
       title: message,
       showConfirmButton: false,
       timer: 1500
       })
  }
}
