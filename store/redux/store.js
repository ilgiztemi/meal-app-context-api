import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './store'

export const store = configureStore( {
  reducer: {
    favoriteMeals: favoritesReducer
  }
} );