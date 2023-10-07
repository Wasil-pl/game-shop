export const modalMessages = {
  orderSuccess: {
    headerText: 'Order placed successfully',
    textMessage: 'Thank you for your order!',
  },
  editOrderSuccess: {
    headerText: 'Order edited successfully',
    textMessage: 'Order edited successfully',
  },
  loginRequired: {
    headerText: 'Login required',
    textMessage: 'You need to be logged in to place an order',
  },
  outOfStock: {
    headerText: 'Out of stock',
    textMessage:
      'Sorry, this product is out of stock, please check back later or contact us for more information',
  },
  registerSuccess: {
    headerText: 'Account created successfully',
    textMessage: 'You can now log in to your account',
  },
  loginSuccess: {
    headerText: 'Login success',
    textMessage: 'You are logged in, welcome!',
  },
  addContentSuccess: {
    headerText: 'Content added successfully',
    textMessage: 'You can now add images',
  },
  addImagesSuccess: {
    headerText: 'Images added successfully',
    textMessage: 'You can now activate product',
  },
  addActivateSuccess: {
    headerText: 'Product activated successfully',
    textMessage: 'You can now view your product',
  },
  deleteProductConfirm: {
    headerText: (name) => `Delete ${name}?`,
    textMessage: 'Are you sure you want to delete this product?',
  },
  editContentSuccess: {
    headerText: (name) => `Edit ${name}`,
    textMessage: 'Content edited successfully',
  },
  editImagesSuccess: {
    headerText: (name) => `Edit ${name}`,
    textMessage: 'Images edited successfully',
  },
  editActivateSuccess: {
    headerText: (name) => `Edit ${name}`,
    textMessage: 'Product edited successfully',
  },
  statusChangeConfirm: {
    headerText: (id) => `Change status Order id: ${id}?`,
    textMessage: 'Are you sure you want to change this status?',
  },
};
