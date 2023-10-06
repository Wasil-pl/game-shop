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
  minLength: (minLength) =>
    `This field must be at least ${minLength} characters long`,
  maxLength: (maxLength) =>
    `This field must be no more than ${maxLength} characters long`,
  passwordMatch: 'Passwords do not match',
  minNumber: (minNumber) => `This field must be at least ${minNumber}`,
};

export const patterns = {
  emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  passwordMinLength: 5,
  languageMinLength: 2,
  languageMaxLength: 3,
  descryptionMinLength: 10,
  descryptionMaxLength: 1000,
  numberMin: 1,
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
};

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
};

export const registerSuccessMessage = 'Account created successfully!';

export const platformOptions = ['PC', 'PLAYSTATION', 'XBOX', 'NINTENDO'];

export const fileNames = [
  'mainPicture',
  'pictureOne',
  'pictureTwo',
  'pictureThree',
  'pictureFour',
  'pictureFive',
];

export const labels = [
  'Main Picture',
  'First picture',
  'Second picture',
  'Third picture',
  'Fourth picture',
  'Fifth picture',
];
