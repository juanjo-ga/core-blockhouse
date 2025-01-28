import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { loadAuthState } from "../utils/storage";
import { setUser } from "./slices/userSlice";


const initializeStore = async () => {
  const persistedAuth = await loadAuthState();
  if (persistedAuth && persistedAuth.user) {
    store.dispatch(setUser(persistedAuth.user));
  }
};


const store = configureStore({
  reducer: {
    auth: userSlice,
    // Add other reducers here
  },
});

initializeStore();


export default store;