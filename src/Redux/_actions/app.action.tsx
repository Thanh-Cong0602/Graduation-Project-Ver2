import { appConstants } from "../_constants";

export const setTitlePage = (title: string) => {
  return {
    type: appConstants.SET_TITLE_PAGE,
    payload: title
  }
}