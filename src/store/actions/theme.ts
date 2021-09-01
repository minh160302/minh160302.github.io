import { THEME } from "store/root/type";
import { ChangeThemePayload } from "./payload-types";

export const changeTheme = (theme: ChangeThemePayload) => {
  return {
    type: THEME.changeTheme,
    payload: theme,
  };
};

