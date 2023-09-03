import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
  intro: string;
  price: string;
  inStock: boolean;
  img: string;
  goodsType: string;
  category: string;
  description: Array<{ title: string; text: string }>;
  productCode: string;
  specs: {
    general: Array<{ specName: string; value: string }>;
    features: Array<{ specName: string; value: string }>;
    links: string;
  };
}

export interface ProductState {
  products: Product[] | null;
}

const initialState: ProductState = {
  products: null,
};

export const setProducts = createAction<Product[]>('setProducts');

const prodReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProducts, (state, action: PayloadAction<Product[]>) => {
    state.products = action.payload;
  });
});

export default prodReducer;
