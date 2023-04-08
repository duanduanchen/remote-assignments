function avg(data) {
    let total_price = 0
    for (let i=0; i<data.products.length; i++) {
        total_price += data.products[i].price
    }
    return total_price / data.size
}

console.log(
    avg({
    size: 3,
    products: [
        {
            name: 'Product 1',
            price: 100,
        },
        {
            name: 'Product 2',
            price: 700,
        },
        {
            name: 'Product 3',
            price: 250,
        },
    ]
  })
);