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
};

export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const Error = ({ children }) => (
  <small className="d-block form-text text-danger mt-2">{children}</small>
);

export const maxDisplayedProducts = 3;
