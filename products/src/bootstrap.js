import faker from 'faker';

const mount = (el) => {
  let products = '';
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products; // the same as ReactDOM.render(<App/>, el)
}

// Context #1:
// run in dev mode in isolation and use local index.html
// which has an elem with an id 'dev-products'
// the app is rendered immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

// Context #2:
// run in dev mode via CONTAINER app
// there is no guarantee that an id 'dev-products' exists
// the app is not rendered immediately cause it may cause error

export { mount };