import { combineReducers } from "redux";
import theme, { ThemeState } from "./theme";
import route, { RouteState } from "./route";

export interface IRootState {
  readonly theme: ThemeState;
  readonly route: RouteState;
}

const rootReducers = combineReducers<IRootState>({
  theme,
  route
});

export default rootReducers;
