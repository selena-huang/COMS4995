// originally from a product list: https://freshman.tech/product-list/

let productList = [];

function renderProduct(product) {
  const list = document.querySelector('.js-product-list');
  const item = document.querySelector(`[data-key='${product.id}']`);
  
  if (product.deleted) {
    item.remove();
    return
  }

  const node = document.createElement("li");
  node.setAttribute('class', `product-item`);
  node.setAttribute('data-key', product.id);
  node.innerHTML = `
  	-<span>${product.text}</span>
    <button class="fas fa-minus-circle delete-product js-delete-product">
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addProduct(text) {
  const product = {
    text,
    id: Date.now(),
  };

  productList.push(product);
  //productList.sort( (a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0));
  renderProduct(product);
}

function deleteProduct(key) {
  const index = productList.findIndex(item => item.id === Number(key));
  const product = {
    deleted: true,
    ...productList[index]
  };
  productList = productList.filter(item => item.id !== Number(key));
  renderProduct(product);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-product-input');

  const text = input.value.trim();
  if (text !== '') {
    addProduct(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-product-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-delete-product')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteProduct(itemKey);
  }
});
