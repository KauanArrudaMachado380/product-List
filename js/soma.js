import cart from './cart.js';

const logica = {
    recebendoValores(quantity, productName, productPrice, button) {

        const list = document.querySelector('.list_order');
        
        const existiItem = Array.from(list.children).find((item) => {
            return item.querySelector('.name_order').textContent === productName;
        });        
        
        if (existiItem) {
            if(quantity > 0){
                let quantityOrder = existiItem.querySelector('.quantity_number');
                quantityOrder.textContent = `${quantity.toString()}x`;

                const numericPrice = parseFloat(productPrice.replace('$', ''));

                let priceOrder = existiItem.querySelector('.price_total');
                priceOrder.textContent = `$${(quantity * numericPrice).toFixed(2)}`;
                
            } else {
                list.removeChild(existiItem);
            }
        } else {
            cart.createListOrder(productName, quantity, productPrice);
        }
        
        logica.calculandoTotal();
        cart.verificandoCart();
    },

    calculandoTotal (){

        let total  = 0;
        const list = document.querySelectorAll('.price_total');

        list.forEach((item) => {
            total += parseFloat(item.textContent.replace('$', ''));
        });

        cart.atualizarTotal(total);

    }
}

export default logica;