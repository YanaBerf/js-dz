class ProductList {
    #goods;
    #allProducts;
  
    constructor(container = '.products') {
      console.log('constructor');
      this.container = container;
      // this._goods = [];
      this.#goods = [];
      this.#allProducts = [];
  
      this.#fetchGoods();
      this.#render();
  
      // this.sum = 0; // BAD!
    }
    sum() {
        return this.#goods.reduce((sum, {price}) => sum + price, 0);

    }
    
  
    // goodsTotalPrice() { // Very BAD!
    //   this.#goods.forEach((good) => {
    //     this.sum += good.price;
    //   });
    //
    //   document.querySelector('.someBlock').insertAdjacentHTML('beforeend', `Сумма = ${this.sum}`);
    //   // return НО НЕ this.sum!!!
    // }
    //
    // getTotalWithDiscount(discount) {
    //   return this.goodsTotalPrice() * discount;
    // }
  
    #fetchGoods() {
      this.#goods = [
        {id: 1, title: 'Notebook', price: 20000},
        {id: 2, title: 'Mouse', price: 1500},
        {id: 3, title: 'Keyboard', price: 5000},
        {id: 4, title: 'Gamepad', price: 4500},
      ];
    }
  
    #render() {
      const block = document.querySelector(this.container);
  
      this.#goods.forEach((product) => {
        const productObject = new ProductItem(product);
        console.log(productObject);
        this.#allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
      });
    }
  }
  
  class ProductItem {
    constructor(product, img='https://placehold.it/150x100') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    render() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
  }
  
  const productList = new ProductList();


  class AllCart {
      constructor(product) {
          this.id = product.id;
          this.title = product.title;
          this.price = product.price;
          this.totalPrice = ;
      }
  }
  
  class CartItem extends AllCart{
      constructor(product, img, quantity) {
          super(product);
          this.img = product.img;
          this.quantity = product.quantity;

      }

  }
/*  

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];
//const renderProduct = (title, price) => {
    //return `<div class="product-item">
   // <h3>${title}</h3>
    //<p>${price}</p>
    //<button class="by-btn">Добавить в корзину</button>
   // </div>`;
//}
//const renderProducts = (list) => {
    //const productList = list.map((item) => {
       // return renderProduct(item.title, item.price);
   // }).join('')
// console.log(productList);
   // document.querySelector('.products').innerHTML = productList;
//}
//renderProducts(products);

const renderProduct = (item,) => `<div class="product-item" data-id="${this.id}">
    <div class="desc">
    <h3>${item.title}</h3>
    <p>${item.price}</p>
    <button class="buy-btn">Купить</button>
    </div>
    </div>`;
    const renderProducts = list => {
        document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));

    };
    renderProducts(products);
*/




  



    




