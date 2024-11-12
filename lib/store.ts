import { engageApi } from "@/api/EngageAPI";
import appSlice from "@/features/appSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        app: appSlice,

        [engageApi.reducerPath]: engageApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(engageApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
