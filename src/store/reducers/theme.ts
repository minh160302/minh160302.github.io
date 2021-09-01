import { THEME } from "../root/type";
import { REQUEST, FAILURE, SUCCESS } from "../utils/async_types";

const initialState = {
  // theme: "#3f51b5",
  theme: "#000000",
  color: "#ffffff",
  loading: false,
  errorMessage: null,
};

export type ThemeState = Readonly<typeof initialState>;

const themeReducer = (state: ThemeState = initialState, action): ThemeState => {
  switch (action.type) {
    case REQUEST(THEME.changeTheme):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(THEME.changeTheme):
      return {
        ...state,
        loading: true,
        errorMessage: action.payload,
      };
    case SUCCESS(THEME.changeTheme):
      return {
        ...state,
        theme: action.payload.theme,
        color: action.payload.color
      };

    default:
      return state;
  }
};

export default themeReducer;