import { ActionType } from "../actionType";

export const handlerPage = page => ({
  type: ActionType.HANDLER_PAGE,
  payload : page
});
