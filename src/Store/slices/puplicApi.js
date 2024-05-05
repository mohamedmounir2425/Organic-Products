import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  products: [],
  errorProducts: null,
  isLoading: false,
  edited: {},
};

const baseUrl = "https://server-organic-product-2.onrender.com";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (type, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`${baseUrl}/${type}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ================================= finished up ===================================
export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      let { type, formValue } = product;

      const { data } = await axios.post(
        `https://organic-product.onrender.com/${type}`,
        formValue
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//  ====================================================================================
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (products, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      let { type, id } = products;
      const { data } = await axios.delete(
        `https://organic-product.onrender.com/${type}/${id}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ================================================================================
export const editeProducts = createAsyncThunk(
  "products/editeProducts",
  async (product, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      let { type, id, formValue } = product;

      const { data } = await axios.put(
        `https://organic-product.onrender.com/${type}/${id}`,
        formValue
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

let productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorProducts = action.payload;
    },
    // ========================================
    [addProducts.pending]: (state, action) => {},
    [addProducts.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [addProducts.rejected]: (state, action) => {
      state.errorProducts = action.payload;
    },
    //  =======================================
    [deleteProducts.pending]: (state, action) => {},
    [deleteProducts.fulfilled]: (state, action) => {
      state.products = state.products.filter((item) => {
        return item._id !== action.payload._id;
      });
    },
    [deleteProducts.rejected]: (state, action) => {
      state.errorProducts = action.payload;
    },
    //  =======================================
    [editeProducts.pending]: (state, action) => {},
    [editeProducts.fulfilled]: (state, action) => {
      state.edited = action.payload;
      let newVegetables = [...state.vegetables];
      let index = newVegetables.indexOf(action.payload);
      newVegetables[index] = action.payload;
      state.vegetables = newVegetables;
    },
    [editeProducts.rejected]: (state, action) => {
      state.errorVegetable = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
