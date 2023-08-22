const products = [
  {
    id: 1,
    name: 'Trà sữa truyền thống',
    price: 30000,
  },
  {
    id: 2,
    name: 'Trà sữa Thái xanh',
    price: 32000,
  },
  {
    id: 3,
    name: 'Trà sữa đặc biệt',
    price: 40000,
  },
];

const productListElement = document.querySelector('.product-list');

const renderList = () => {
  const productElement = products.map((product) => {
    return ` <li>
    <p>${product.name}</p>
    <span>${product.price} VND</span>
    <span>quantity</span> <span>-</span> <span>1</span> <span>+</span>
    <p>Ice</p>
    <span>0%</span> <span>50%</span> <span>100%</span>
    <p>Sugar</p>
    <span>0%</span> <span>50%</span> <span>100%</span>
    <button>add to cart</button>
  </li>`;
  });
  productListElement.innerHTML = productElement.join('');
};

renderList();
