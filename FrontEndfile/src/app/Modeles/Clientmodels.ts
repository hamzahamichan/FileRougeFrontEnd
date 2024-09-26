export interface Client{
  idClient: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  telephone: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}



