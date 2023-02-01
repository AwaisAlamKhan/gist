import { combineReducers } from "@reduxjs/toolkit";
import gistListSliceReducer from "./components/gistList/gistListSlice";

const rootReducer = combineReducers({
  gistList: gistListSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
