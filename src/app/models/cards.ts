export interface Card {
  _id: string;
  number: string;
  ownerId: string;
  owner: string;
  type: string;
  amount: number;
}

// export interface CardForm {
//   type:string;
//   name:string;
//   surname:string;
//   number:string;
//   pin:string;
// }

// //pre-precated
// export type CardType = 'visa' | 'mastercard';

export interface Movement {
  _id: string;
  type: 'in' | 'out';
  amount: number;
  title: string;
  description: string;
  cardId: string;
  timestamp: number;
}

export interface Contact {
  _id: string;
  name: string;
  surname: string;
  iban: string;
}
