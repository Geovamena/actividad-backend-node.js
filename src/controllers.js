const models = require("./models");

const getAllOrders = async (req, res) => {
  const orders = await models.Order.findAll();
  res.json(orders);
};

const createOrder = async (req, res) => {
  const { customerId } = req.params;
  const { items, payment_method, address_id } = req.body;

  // Validar que los datos ingresados sean correctos y crear la orden en la base de datos
  const order = await models.Order.create({
    customer_id: customerId,
    payment_method,
    address_id,
  });

  // Agregar los productos a la orden
  for (const item of items) {
    await models.OrderItem.create({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
    });
  }

  res.json(order);
};

const getAllAddresses = async (req, res) => {
  const { customerId } = req.params;

  // Obtener todas las direcciones del cliente especificado
  const addresses = await models.Address.findAll({
    where: {
      customer_id: customerId,
    },
  });

  res.json(addresses);
};

const getDeliveryOrders = async (req, res) => {
  const { deliveryId } = req.params;

  // Obtener todas las órdenes asignadas al usuario delivery especificado
  const orders = await models.Order.findAll({
    where: {
      delivery_id: deliveryId,
    },
  });

  res.json(orders);
};

module.exports = {
  getAllOrders,
  createOrder,
  getAllAddresses,
  getDeliveryOrders,
};
