// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const result = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //intento duplicar elemento sin éxito
  // var newRow = document.createElement('tr');
  // const node = document.getElementsByClassName('.product');
  // const clone = node.cloneNode(true);
  // newRow.tbody.appendChild(clone);
  const allProducts = document.getElementsByClassName('product');
  let totalValue = 0;

  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const createRow = event.currentTarget.parentNode.parentNode;

  const productNameInput = createRow.querySelector('input');
  const productPriceInput = createRow.querySelector('input[type="number"]');

  const nameValue = productNameInput.value;
  const priceValue = productPriceInput.valueAsNumber;

  const tableRow = document.createElement('tr');
  tableRow.classList.add('product');
  tableRow.innerHTML += `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const removeButton = tableRow.querySelector('.btn-remove');

  removeButton.addEventListener('click', removeProduct);

  const parent = document.querySelector('#cart tbody');

  parent.appendChild(tableRow);

  productNameInput.value = '';
  productPriceInput.valueAsNumber = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }

  const createButton = document.getElementById('create');
  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});
