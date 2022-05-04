export interface Card {
  cardNumber: string,
  amount: number,
  currency: string,
  circuit: "Mastercard" | "Visa" | "American Express" | "Crypto" ;
}
