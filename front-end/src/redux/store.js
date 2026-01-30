import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import selectModelReducer from './features/selectModel/selectModelSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    model : selectModelReducer
  },
})