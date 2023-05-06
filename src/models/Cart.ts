class Cart {
    items: CartItem[]

    constructor(items: CartItem[]) {
        this.items = items
    }

    addItem(item: CartItem) {
        this.items.push(item)
    }

    removeItem(item: CartItem) {
        const index = this.items.findIndex((cartItem) => cartItem.id === item.id)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    }
}

class CartItem {
    id: number
    product: Product
    quantity: number

    constructor(id: number, product: Product, quantity: number) {
        this.id = id
        this.product = product
        this.quantity = quantity
    }
}
