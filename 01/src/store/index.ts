import { configureStore } from "@reduxjs/toolkit";
import { productReducer, addProduct, removeProduct } from "./slices/productSlice";

const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export { store, addProduct, removeProduct }
export type RootState = ReturnType<typeof store.getState>