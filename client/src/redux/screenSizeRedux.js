export const getScreenMode = ({ screenMode }) => screenMode.screenMode;

const reducerName = 'screenMode';
const createActionName = actionName => `app/${reducerName}/${actionName}`;

const UPDATE_VIEWPORT_MODE = createActionName('UPDATE_VIEWPORT_MODE');

export const updateViewportMode = payload => ({
  payload,
  type: UPDATE_VIEWPORT_MODE,
});

const screenReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_VIEWPORT_MODE:
      return {
        screenMode: action.payload,
      };
    default:
      return statePart;
  }
};

export default screenReducer;
