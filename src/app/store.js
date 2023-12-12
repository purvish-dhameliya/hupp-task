import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["post"],
};

const persistedReducer = persistReducer(persistConfig, postReducer);

export const store = configureStore({
  reducer: {
    post: persistedReducer,
  },
});

export const persistor = persistStore(store);
