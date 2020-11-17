const cart_items = document.getElementById('cart')

function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("Iphone 11", "Gawai");
cart_items.innerHTML = `Product : ${getProduct.name} Category : ${getProduct.category}`

// penggunaan object literal dan string concat