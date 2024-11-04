const cardConfirm = {

    confirmOrders (cartPrice){

        const confirmContainer = document.createElement('div');
        confirmContainer.classList.add('container_confirm');

        // pegando os cards de pedidos

        const items = document.querySelectorAll('.list_order__item');

        // container que contem o card de confirmação

        const confirmDiv = document.createElement('div');
        confirmDiv.classList.add('card_confirm');

        // criando o card de confirmação

        const img = document.createElement('img');
        img.classList.add('card_confirm-img');
        img.src = './images/icon-order-confirmed.svg';

        const titule = document.createElement('h2');
        titule.classList.add('card_confirm-titule');
        titule.textContent = 'Order Confirmed';

        const text = document.createElement('p');
        text.classList.add('card_confirm-text');
        text.textContent = 'We hope you enjoy your food!';

        confirmDiv.appendChild(img);
        confirmDiv.appendChild(titule);
        confirmDiv.appendChild(text);

        // criando os cards de pedidos

        const ordersDiv = document.createElement('div');
        ordersDiv.classList.add('card_confirm-orders');

        confirmDiv.appendChild(ordersDiv);

        items.forEach((order) => {
            this.cardsDesserts(order, ordersDiv);            
        });

        const orderTotal = document.createElement('p');
        orderTotal.classList.add('card_confirm-orderTotal');
        orderTotal.textContent = 'Order Total';

        const totalPrice = document.createElement('h2');
        totalPrice.classList.add('card_confirm-totalPrice');
        totalPrice.textContent = `$${cartPrice.replace('$', '')}`;

        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.classList.add('card_confirm-totalPriceDiv');

        totalPriceDiv.appendChild(orderTotal);
        totalPriceDiv.appendChild(totalPrice);
        
        ordersDiv.appendChild(totalPriceDiv);

        // criando o botão

        const button = document.createElement('button');
        button.classList.add('card_confirm-button');
        button.textContent = 'Start New Order';
        button.addEventListener('click', () => {
            alert('Your order has been successfully completed!');
            window.location.reload();
        });

        // colocando os cards dentro do card de confirmação
        
        confirmDiv.appendChild(button);

        confirmContainer.appendChild(confirmDiv);
        document.body.appendChild(confirmContainer);
    },

    cardsDesserts (order, container){

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('confirm_item');

        const titule = document.createElement('h2');
        titule.classList.add('confirm_item-titule');
        titule.textContent = `${order.children[0].textContent}`;
        
        const product = window.allProducts.find(product => product.name === titule.textContent);

        const img = document.createElement('img');
        img.classList.add('confirm_item-img');
        img.src = product ? product.image.thumbnail : '';

        const quantity = document.createElement('p');
        quantity.classList.add('confirm_item-quantity');
        quantity.textContent = `${order.children[1].textContent}`;

        const price = document.createElement('p');
        price.classList.add('confirm_item-price');
        price.textContent = `@$${order.children[2].textContent.replace('@ $', '')}`;

        const totalPrice = document.createElement('p');
        totalPrice.classList.add('confirm_item-totalPrice');
        totalPrice.textContent = `${order.children[3].textContent.replace('@ $', '')}`;

        elementDiv.appendChild(img);
        elementDiv.appendChild(titule);
        elementDiv.appendChild(quantity);
        elementDiv.appendChild(price);
        elementDiv.appendChild(totalPrice);
        
        container.appendChild(elementDiv);
    }
}

export default cardConfirm;