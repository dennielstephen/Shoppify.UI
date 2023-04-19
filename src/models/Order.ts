class Order {
    id: number;
    userId: number;
    products: Product[];
    total: number;
    date: Date;
  
    constructor(
      id: number,
      userId: number,
      products: Product[],
      total: number,
      date: Date
    ) {
      this.id = id;
      this.userId = userId;
      this.products = products;
      this.total = total;
      this.date = date;
    }
}
  