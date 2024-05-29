
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import commentsReducer from './modules/commentsStore'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    comments: commentsReducer
  }
})


export default store