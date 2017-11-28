
// Funciones en ES6
const myWallet = (currentMoney, expenses) => {
  let moneyLeft = currentMoney - expenses;
  let msg = `You have ${moneyLeft} $ remaining in you wallet`;
    return msg;
};

myWallet(50,20);
