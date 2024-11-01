const cardConfirm = {

    confirmOrders (cartPrice){

        const items = document.querySelectorAll('.list_order__item');

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

        items.forEach((order) => {
            this.cardsDesserts(order);
        });

        const orderTotal = document.createElement('p');
        orderTotal.classList.add('card_confirm-orderTotal');
        orderTotal.textContent = 'Order Total';

        const totalPrice = document.createElement('h2');
        totalPrice.classList.add('card_confirm-totalPrice');
        totalPrice.textContent = `$${cartPrice.replace('$', '')}`;
        
        const button = document.createElement('button');
        button.classList.add('card_confirm-button');
        button.textContent = 'Start New Order';
        button.addEventListener('click', () => {
            
        });

        confirmDiv.appendChild(img);
        confirmDiv.appendChild(titule);
        confirmDiv.appendChild(text);

        ordersDiv.appendChild(orderTotal);
        ordersDiv.appendChild(totalPrice);

        confirmDiv.appendChild(ordersDiv);
        confirmDiv.appendChild(button);
    },

    cardsDesserts (order){
        
        const container = document.querySelector('.card_confirm-orders');

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('card_confirm__item');

        const img = document.createElement('img');
        img.classList.add('card_confirm-img');

        const titule = document.createElement('h2');
        titule.classList.add('card_confirm-titule');
        titule.textContent = `${order.children[0].textContent}`;

        const quantity = document.createElement('p');
        quantity.classList.add('card_confirm-quantity');
        quantity.textContent = `${order.children[1].textContent}`;

        const price = document.createElement('p');
        price.classList.add('card_confirm-price');
        price.textContent = `$${order.children[2].textContent.replace('$', '')}`;

        const totalPrice = document.createElement('p');
        totalPrice.classList.add('card_confirm-totalPrice');
        totalPrice.textContent = `$${order.children[3].textContent.replace('$', '')}`;

        elementDiv.appendChild(img);
        elementDiv.appendChild(titule);
        elementDiv.appendChild(quantity);
        elementDiv.appendChild(price);
        elementDiv.appendChild(totalPrice);

        console.log(elementDiv);
        

        container.appendChild(elementDiv);
    }
}

export default cardConfirm;