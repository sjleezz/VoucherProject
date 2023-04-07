// import { combineReducers } from "redux";
import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import dataReducer from "./features/data/dataSlices";
import themeReducer from "./features/theme/themeSlices";
import sproReducer from "./features/speechpro/sproSlices";
import gproReducer from "./features/grammarpro/gproSlices";
import vproReducer from "./features/vocapro/vproSlices";

const rootReducer = (state, action: PayloadAction<any>) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        data: dataReducer,
        theme: themeReducer,
        speechpro: sproReducer,
        grammarpro: gproReducer,
        vocapro: vproReducer,
      })(state, action);
  }
};

export default rootReducer;
