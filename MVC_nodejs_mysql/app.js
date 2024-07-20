const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const User = require('./models/user');
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

Product.belongsTo(User, { onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next()
  })
  .catch(err => {
    console.log(err)
  })
})

app.use(errorController.get404);

sequelize
  .sync()
  .then(async result => {
    let user = await User.findByPk(1);
    if (!user) {
      user = await User.create({ name: "Phạm Ngọc Bảo An", email: "Anpnb79@gmail.com" });
    }
    await user.createCart(); // Giả sử createCart là phương thức bất đồng bộ
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
    });
  })
  .catch(err => {
    console.error('Error syncing the database:', err);
  });
