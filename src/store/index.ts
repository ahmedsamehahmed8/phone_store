import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Product from "../store/products/productsslice";
import card from "../store/card/Cardsclice";
import user_checkoutslice from "../store/user_checkout/user_checkoutslice";
import authslice from "./auth/authslice";
import brand from "../store/brands/brandsslice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["card", "authslice"],
};
const cardpersistconfig = {
  key: "card",
  storage,
  whitelist: ["item_id"],
};
const authslicepersistconfig = {
  key: "authslice",
  storage,
  whitelist: ["user ,accessToken"],
};

const rootreducer = combineReducers({
  brand,
  user_checkoutslice,
  authslice: persistReducer(authslicepersistconfig, authslice),
  card: persistReducer(cardpersistconfig, card),
  Product,
});

const persistedReducer = persistReducer(persistconfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
