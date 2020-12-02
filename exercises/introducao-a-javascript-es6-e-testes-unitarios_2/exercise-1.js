const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address.street;
  const homeNumber = order.address.number;
  const apNumber = order.address.apartment;  
  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${address}, Nº: ${homeNumber}, AP: ${apNumber} `
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50.00;
  return `Olá ${order.name}, o seu pedido de muzzarela, calabresa e Coca-Cola Zero é R$${order.payment.total},00.`
}

orderModifier(order);

console.log(orderModifier(order))
// console.log(Object.values(order))