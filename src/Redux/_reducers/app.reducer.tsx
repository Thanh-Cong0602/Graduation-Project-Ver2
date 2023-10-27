import { appConstants } from "../_constants";

interface AppState {
  titlePage: string | null,
};

const initialState: AppState = {
  titlePage: 'Trang chủ hệ thống',
};

interface AppAction {
  type: string;
  payload: any;
};

export function appReducer(state: AppState = initialState, action: AppAction): AppState {
  switch (action.type) {
    case appConstants.SET_TITLE_PAGE:
      return {
        ...state,
        titlePage: action.payload,
      }
    default:
      return state;
  }
}