import { ROUTE } from "../root/type";
import { REQUEST, FAILURE, SUCCESS } from "../utils/async_types";

const initialState = {
  route: "/",
  loading: false,
  errorMessage: null,
};

export type RouteState = Readonly<typeof initialState>;

const routeReducer = (state: RouteState = initialState, action): RouteState => {
  switch (action.type) {
    case REQUEST(ROUTE.changeRoute):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ROUTE.changeRoute):
      return {
        ...state,
        loading: true,
        errorMessage: action.payload,
      };
    case SUCCESS(ROUTE.changeRoute):
      return {
        ...state,
        route: action.payload
      };

    default:
      return state;
  }
};

export default routeReducer;