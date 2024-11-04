import buttons from './buttons.js';

const products = {
    async getProducts() {
        const response = await fetch('./JSON/data.json');
        const data = await response.json();
        return data
    },

    async createProduct(container) {

        const products = await this.getProducts();

        products.forEach(async (product) => {

            const card = document.createElement('div');
            card.classList.add('cards_desserts');
            card.setAttribute('data-id', product.name);

            const img = document.createElement('img');
            img.classList.add('img_dessert');
            img.src = this.alterandoImagems(product);

            const button = document.createElement('button');
            button.classList.add('cards_desserts__button');
            button.id = product.name.replace(/\s+/g, '-');

            button.addEventListener('click', () => {
                buttons.alterandoButtton(button);
            });

            const imgCart = document.createElement('img');
            imgCart.classList.add('button_cart');
            imgCart.src = './images/icon-add-to-cart.svg';

            const text = document.createElement('p');
            text.classList.add('button_text');
            text.textContent = 'Add to cart';

            button.appendChild(imgCart);
            button.appendChild(text);

            const textArea = document.createElement('div');
            textArea.classList.add('card_text_area');

            const h3 = document.createElement('h2');
            h3.classList.add('card_category');
            h3.textContent = product.category;

            const h2 = document.createElement('h2');            
            h2.classList.add('card_title');
            h2.textContent = product.name;

            const p = document.createElement('p');
            p.classList.add('card_price');
            p.textContent = `$ ${product.price.toFixed(2)}`;

            textArea.appendChild(h3);
            textArea.appendChild(h2);
            textArea.appendChild(p);

            card.appendChild(img);
            card.appendChild(button);
            card.appendChild(textArea);

            container.appendChild(card);
        })
    },

    alterandoImagems(card) {
        const widthSize = window.innerWidth;
        if (widthSize <= 600) {            
            return card.image.mobile;
        } else if (widthSize <= 1024) {
            return card.image.tablet;
        } else {
            return card.image.desktop;
        }
    }


}

export default products;