export const errorMessages = {
  required: 'This field is required',
  requiredFile: 'Please add a picture',
  selectPlatform: 'Please select an option',
  enterInput: "This input can't be empty",
  emailPattern: 'Invalid email address',
  validateFile: 'Invalid file type',
  noMainPicture: 'You can not activate product without main picture',
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
