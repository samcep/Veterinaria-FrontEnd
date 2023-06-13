export interface ResponseMessage {
    messageType: string;
    data:        Mascota[];
    message:     string;
}

export interface Mascota {
    idMascotaId:       number;
    nombreMascota:     string;
    especie:           Especie;
    raza:              Raza;
    fechaDeNacimiento: Date;
    idPropietario:     number;
}

export enum Especie {
  Mamifero = 1,
  Ave ,
  Reptil,
  Pez,
  Insecto
}

export enum Raza {
  Basenji = 1,
  Ariegeois,
  Artois,
  Affenpinscherm,
  Akita
}

export enum Propietario {
  Veterinaria = 1,
  Samuel,
}
