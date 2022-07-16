import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer, initialState } from "./reducer"; //replace by data.js

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    // Reducer, // reducer
    // initialState // our initialState

    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),

    applyMiddleware(thunk, logger)
  );

  return store;
};
