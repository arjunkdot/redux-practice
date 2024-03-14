import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

const initialState: ProductType[] = [];

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
        removeProduct(state, action) {
            return state.filter(product => product.id !== action.payload)
        }
    }
});

export const { addProduct, removeProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;