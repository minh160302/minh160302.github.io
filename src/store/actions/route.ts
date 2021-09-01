import { ROUTE } from "store/root/type";
import { SUCCESS } from "store/utils/async_types";

export const changeRoute = (route: string) => {
  return {
    type: SUCCESS(ROUTE.changeRoute),
    payload: route,
  };
};

