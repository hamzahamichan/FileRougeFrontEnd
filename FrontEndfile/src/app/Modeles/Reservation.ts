export interface Reservation {
  idReservation: number;
  eventType: string;
  nbrParticipants: number;
  details: string;
  dateDebut: Date;
  idSalle: number;
}
