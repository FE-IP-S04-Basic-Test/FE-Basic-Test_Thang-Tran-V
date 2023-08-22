const product = [
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

const sugars = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const ices = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const addToCard = (productId, iceId, sugarId, quantity) => {
  const cartString = localStorage.getItem('cart');
  var carts = cartString ? JSON.parse(cartString) : [];

  var cartItem = carts.find(
    (x) =>
      x.productId === productId && x.iceId === iceId && x.sugarId === sugarId
  );
  if (cartItem) {
    cartItem += quantity;
  } else {
    carts.push({
      productId,
      iceId,
      sugarId,
      quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(carts));
};

addToCard();
