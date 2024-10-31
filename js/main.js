import cart from './cart.js';
import products from './cards.js';


let allProducts = [];

document.addEventListener('DOMContentLoaded', async () => {
    
    const container = document.querySelector('.container');
    
    allProducts = await products.getProducts();

    await products.createProduct(container);
    
    cart.verificandoCart();
});

window.addEventListener('resize',() => {

    const cards = document.querySelectorAll('.cards_desserts');

    cards.forEach((card) => {
        const img = card.querySelector('.img_dessert');
        const productId = card.getAttribute('data-id');
        const product = allProducts.find((product) => product.name === productId);

        if(product) {
            img.src = products.alterandoImagems(product);
        }
    })
});