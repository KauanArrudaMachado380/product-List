const cardConfirm = {

    confirmOrders (cartPrice){

        const listOrder = document.querySelector('.list_order');
        

        const confirmDiv = document.createElement('div');
        confirmDiv.classList.add('card_confirm');

        const img = document.createElement('img');
        img.classList.add('card_confirm-img');
        img.src = './images/icon-order-confirmed.svg';

        const titule = document.createElement('h2');
        titule.classList.add('card_confirm-titule');
        titule.textContent = 'Order Confirmed';

        const text = document.createElement('p');
        text.classList.add('card_confirm-text');
        text.textContent = 'We hope you enjoy your food!';

        const ordersDiv = document.createElement('div');
        ordersDiv.classList.add('card_confirm-orders');

        listOrder.forEach((order) => {
            this.cardsDesserts(order);
        })

        const orderTotal = document.createElement('p');
        orderTotal.classList.add('card_confirm-orderTotal');
        orderTotal.textContent = 'Order Total';

        const totalPrice = document.createElement('h2');
        totalPrice.classList.add('card_confirm-totalPrice');
        totalPrice.textContent = `$${cartPrice.replace('$', '')}`;

        console.log(totalPrice);
        

    },

    cardsDesserts (order){ 
        
        const img = document.createElement('img');

        const titule = document.createElement('h2');
        
        const quantity = document.createElement('p');

        const price = document.createElement('p');

        const totalPrice = document.createElement('p');
    }
}

export default cardConfirm;