class Product {
    id: number
    name: string
    description: string
    price: number
    quantity: number
    imageUrl: string
    category: string

    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        quantity: number,
        imageUrl: string,
        category: string,
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
        this.imageUrl = imageUrl
        this.category = category
    }
}
