import { configureStore } from "@reduxjs/toolkit";  
import { cartReducer } from "./cartData/cart";
import { diseasesReducer } from "./Disease/Disease";
import { largeBoxReducer } from "./largeBox/largeBox";
import { loginReducer } from "./login/loginSlice";
import { mealsReducer } from "./Meals/Meals";
import { mediumBoxReducer } from "./mediumBox/MediumBox";
import { productsReducer } from "./slices/puplicApi";
import { smallBoxReducer } from "./smallBox/SmallBox";



export const store = configureStore({
    reducer: {
       
        cartSlice: cartReducer,
        diseasesSlice: diseasesReducer,
        loginSlice: loginReducer,
        smallBoxSlice:smallBoxReducer,
        mediumBoxSlice: mediumBoxReducer,
        largeBoxSlice:largeBoxReducer,
        mealsSlice: mealsReducer,
        productsSlice:productsReducer
    }
})


