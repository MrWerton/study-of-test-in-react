import { ACTIONTYPE, InitialStateType } from "./types";

export function reducer(state: InitialStateType, action: ACTIONTYPE) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      default:
        throw new Error();
    }
}