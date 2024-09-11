export interface Client{
  idClient: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  telephone: string;
  adresse: string;
  gender: Gender;
  role: Role;
}
export enum Gender {
  TAMTOUT = 'FEMALE',
  ARGUAZ = 'MALE'
}
export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}



