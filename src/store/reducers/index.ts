import { combineReducers } from "redux";
import theme, { ThemeState } from "./theme";

export interface IRootState {
  readonly theme: ThemeState;
}

const rootReducers = combineReducers<IRootState>({
  theme,
});

export default rootReducers;
