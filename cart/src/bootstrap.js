import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
}

// Context #1:
// run in dev mode in isolation and use local index.html
// which has an elem with an id 'dev-products'
// the app is rendered immediately
if (process.env.NODE_DEV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

// Context #2:
// run in dev mode via CONTAINER app
// there is no guarantee that an id 'dev-products' exists
// the app is not rendered immediately cause it may cause error

export { mount };
