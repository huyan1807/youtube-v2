export const API_KEY = "AIzaSyB3GFwIu_9SwoHlrACrj_Gci8TG1pbkUZo";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M ";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K ";
  } else {
    return value;
  }
};
