export const errorMessages = {
  required: 'This field is required',
  requiredFile: 'Please add a picture',
  selectPlatform: 'Please select an option',
  enterInput: "This input can't be empty",
  emailPattern: 'Invalid email address',
  textPattern:
    'This field can contain only letters, numbers, spaces and special characters: . , - _ ( )',
  validatePrice: 'Invalid price, can contain only numbers and . ,',
  validateFile: 'Invalid file type',
  maxLength: (maxLength) =>
    `This field can contain max ${maxLength} characters`,
  passwordMatch: 'Passwords do not match',
};

export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const Error = ({ children }) => (
  <small className="d-block form-text text-danger mt-2">{children}</small>
);

export const maxDisplayedProducts = 3;

export const modalMessages = {
  orderSuccess: {
    headerText: 'Order placed successfully',
    textMessage: 'Thank you for your order!',
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
};

export const registerSuccessMessage = 'Account created successfully!';
