import logica from "./soma.js";
import buttonCardsDesserts from "./buttons.js";


const cart = {
    verificandoCart() {
        const cartContainer = document.querySelector('.container_cart');
        const listOrder = document.querySelector('.list_order');
        const containerDiv = document.querySelector('.cart_empty');

        
        if (listOrder.children.length === 0) {

            const cartTotal = document.querySelector('.cart_total');

            if(cartTotal) {
                cartTotal.innerHTML = '';
                cartTotal.remove();
            }

            if(!cartContainer.contains(containerDiv)){
                
                const cartEmpty = document.createElement('div');
                cartEmpty.classList.add('cart_empty');

                const cartImg = document.createElement('img');
                cartImg.classList.add('cart_img');
                cartImg.src = './images/illustration-empty-cart.svg';
                cartImg.alt = 'Cart Empty';

                const cartText = document.createElement('p');
                cartText.classList.add('cart_text');
                cartText.textContent = 'Your added items will appear here';

                cartEmpty.appendChild(cartImg);
                cartEmpty.appendChild(cartText);
                cartContainer.appendChild(cartEmpty);
                
            }
        } else{

            if(cartContainer.contains(containerDiv)){
                containerDiv.remove();

                const cartTotal = document.createElement('div');
                cartTotal.classList.add('cart_total');
                cartContainer.appendChild(cartTotal);

                const item = document.querySelector('.list_order__item');

                const cartText = document.createElement('p');
                cartText.classList.add('cart_text');
                cartText.textContent = 'Order Total';

                const cartPrice = document.createElement('p');
                cartPrice.classList.add('cart_price');
                cartPrice.textContent = `$${item.querySelector('.price_order').textContent.replace('@ $', '')}`;

                const cartButton = document.createElement('button');
                cartButton.classList.add('cart_button');
                cartButton.textContent = 'Confirm Order';

                const delivery = document.createElement('p');
                delivery.classList.add('delivery');
                delivery.innerHTML = `
                    <img src="./images/icon-carbon-neutral.svg" alt="">
                    <p>This is a <strong>Carbon-neutral</strong> delivery</p>
                `;

                cartTotal.appendChild(cartText);
                cartTotal.appendChild(cartPrice);
                cartTotal.appendChild(delivery);
                cartTotal.appendChild(cartButton);
            }
        }
    },

    createListOrder(nome, quantidade, preco) {

        const listOrder = document.querySelector('.list_order');

        const li = document.createElement('li');
        li.classList.add('list_order__item');

        const nameOrder = document.createElement('h2');
        nameOrder.classList.add('name_order');
        nameOrder.textContent = `${nome}`;

        const quantityOrder = document.createElement('p');
        quantityOrder.classList.add('quantity_number');
        quantityOrder.textContent = `${quantidade}x`;

        const priceOrder = document.createElement('p');
        priceOrder.classList.add('price_order');
        priceOrder.textContent = `@ $${preco.replace('$', '')} `;

        const priceTotal = document.createElement('p');
        priceTotal.classList.add('price_total');
        priceTotal.textContent = `$${preco.replace('$', '')}`;

        const buttonDessert = document.getElementById(`${nome.replace(/\s+/g, '-')}`);

        const button = document.createElement('button');
        button.addEventListener('click', () => {
            
            if(buttonDessert){
                buttonCardsDesserts.resetButtons(buttonDessert);
            }

            listOrder.removeChild(li);
            logica.calculandoTotal();
            this.verificandoCart();
        });

        button.classList.add('list_order__button');
        const img = document.createElement('img');
        img.src = './images/icon-remove-item.svg';
        img.classList.add('list_order__button__img');

        button.appendChild(img);


        li.appendChild(nameOrder);
        li.appendChild(quantityOrder);
        li.appendChild(priceOrder);
        li.appendChild(priceTotal);
        li.appendChild(button);
        listOrder.appendChild(li);
    },

    atualizarTotal(preco) {

        const cartTotal = document.querySelector('.cart_price');

        if (cartTotal) {
            cartTotal.textContent = `$${preco.toFixed(2)}`;
        }

    }
}

export default cart; 