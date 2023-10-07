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

export const Error = ({ children }) => (
  <small className="d-block form-text text-danger mt-2">{children}</small>
);
