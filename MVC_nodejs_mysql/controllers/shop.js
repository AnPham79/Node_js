const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  try {
    const product = await Product.findByPk(prodId);
    if (product) {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    } else {
      res.status(404).render('404', { pageTitle: 'Product Not Found' });
    }
  } catch (err) {
    console.log(err);
    next(err); // Pass error to the error-handling middleware
  }
};


// const product = await Product.findByPk(prodId);
    // res.render('shop/product-detail', {
    //   product: product,
    //   pageTitle: product.title,
    //   path: '/products'
    // });

    
exports.getIndex = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const cart = await req.user.getCart();
    const cartProducts = await cart.getProducts();
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart',
      products: cartProducts
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};


exports.postCart = async (req, res, next) => {
  const prodId = req.body.productId;
  try {
    const product = await Product.findByPk(prodId);
    Cart.addProduct(prodId, product.price);
    res.redirect('/cart');
  } catch (err) {
    console.log(err);
  }
};

exports.postCartDeleteProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  try {
    const product = await Product.findByPk(prodId);
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  } catch (err) {
    console.log(err);
  }
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
