export interface Moedas {
  data: {
    coins: [
      {
        uuid: string,
        symbol: string,
        name: string,
        color: string,
        rank: Number,
        price: string,
        iconUrl: string,
      }
    ]
  }
}
