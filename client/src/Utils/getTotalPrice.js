export const getTotalPrice = (data) => {
  let totalPrice = 0;
  data.forEach((item) => {
    totalPrice += (item.salePrice || item.price) * item.quantity;
  });
  return totalPrice;
};
