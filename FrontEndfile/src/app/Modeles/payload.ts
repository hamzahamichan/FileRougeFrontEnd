export interface Payload{
  sub: string; // email
  roles?: string[]; // Assurez-vous que 'roles' est bien défini ici
  idUser?: number; // Assurez-vous que 'idUser' est bien défini ici
  iat?: number; // Issued at
  exp?: number;
}
