import {Gender} from "./Clientmodels";

export interface RegisterRequest{
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  telephone: string;
  adresse: string;
  gender: Gender;
}
