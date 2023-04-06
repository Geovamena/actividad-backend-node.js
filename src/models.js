const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  dialect: "postgres",
  host: "localhost",
});

const Customer = sequelize.define("customer", {
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
});

const Address = sequelize.define("address", {
  street: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
});

const Product = sequelize.define("product", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  description: Sequelize.TEXT,
});

const Order = sequelize.define("order", {
  payment_method: Sequelize.ENUM("cash", "card"),
  total_amount: Sequelize.FLOAT,
});

const OrderItem = sequelize.define("order_item", {
  quantity: Sequelize.INTEGER,
});

Customer.hasMany(Address);
Address.belongsTo(Customer);

Order.belongsTo(Customer);
Order.belongsTo(Address);
Order.belongsTo(models.User, { as: "delivery" });

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

module.exports = {
  Customer,
  Address,
  Product,
  Order,
  OrderItem,
  sequelize,
};
