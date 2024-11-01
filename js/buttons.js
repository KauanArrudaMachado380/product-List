import logica from "./soma.js";

const buttonCardsDesserts = {
    alterandoButtton(button){
        const click = button.getAttribute('data-clicked');
        
            if(!click){
                    
                button.classList.remove('cards_desserts__button');
                button.classList.add('cards_desserts__button--clicked');
                button.textContent = '';

                const buttonPlus = document.createElement('button');
                buttonPlus.classList.add('button_plus');
                buttonPlus.innerHTML = `<img src="./images/icon-increment-quantity.svg" alt="" class="plus">`;
                
                const buttonMinus = document.createElement('button');
                buttonMinus.classList.add('button_minus');
                buttonMinus.innerHTML = `<img src="./images/icon-decrement-quantity.svg" alt="" class="minus">`;

                const quantityOrder = document.createElement('p');
                quantityOrder.classList.add('quantity_order');
                quantityOrder.innerHTML = `0`;            

                button.appendChild(buttonMinus);
                button.appendChild(quantityOrder);
                button.appendChild(buttonPlus);

                button.setAttribute('data-clicked', 'true');

                const productContainer = button.closest('.cards_desserts');
                
                const productName = productContainer.getAttribute('data-id');
                const productPrice = productContainer.querySelector('.card_price').textContent;
                buttonCardsDesserts.alterandoNumeros(buttonPlus, buttonMinus, quantityOrder, productName, productPrice, button);

            } 
    },

    resetButtons(button){
        
            const newButton = document.createElement('button');
            newButton.classList.add('cards_desserts__button');
            newButton.id = button.id;
                    
            const imgCart = document.createElement('img');
            imgCart.classList.add('button_cart');
            imgCart.src = './images/icon-add-to-cart.svg';
    
            const text = document.createElement('p');
            text.classList.add('button_text');
            text.textContent = 'Add to cart';
    
            newButton.appendChild(imgCart);
            newButton.appendChild(text);
        

            newButton.addEventListener('click', () => {
                buttonCardsDesserts.alterandoButtton(newButton);
            })
            
            button.parentNode.replaceChild(newButton, button);
    },

    alterandoNumeros(plus, minus, quantityOrder, productName, productPrice, button){
        
        let quantityValue = parseInt(quantityOrder.innerHTML);

        plus.addEventListener('click', () => {
            let quantity = parseInt(quantityOrder.innerHTML);
            if(quantityOrder.innerHTML <= 9){
                quantityOrder.innerHTML = quantity + 1;

                quantityValue = parseInt(quantityOrder.innerHTML);
                
                logica.recebendoValores(quantityValue, productName, productPrice);    
            }
        })

        minus.addEventListener('click', () => {
            let quantity = parseInt(quantityOrder.innerHTML);
            if(quantity > 0){
                quantityOrder.innerHTML = quantity - 1;
                quantityValue = parseInt(quantityOrder.innerHTML);
                
                logica.recebendoValores(quantityValue, productName, productPrice);
            }

            if(quantityValue === 0){
                    
                buttonCardsDesserts.resetButtons(button);
            }
        })
        
    }
}

export default buttonCardsDesserts;