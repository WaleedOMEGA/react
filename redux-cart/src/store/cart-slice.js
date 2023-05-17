import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const sendCartData=(cart)=>{
  return async(dispatch)=>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'sending...',
      message:'sending cart data',
    })
    );
const sendRequest=async()=>{
  const response=await fetch('https://react-6d374-default-rtdb.firebaseio.com/cart.json',{method:'PUT',
  body:JSON.stringify(cart)
});

if(!response.ok){
dispatch(uiActions.showNotification({
  status:'error',
  title:'Error!',
  message:'sending cart data failed',
}))
}
}

try{
  await  sendRequest();
}catch(error){
  dispatch(uiActions.showNotification({
    status:'error',
    title:'Error!',
    message:'sending cart data failed',
  }))
}

dispatch(uiActions.showNotification({
  status:'success',
  title:'success!',
  message:'Sent cart data Successfully',
}))
  }

}

export const cartActions = cartSlice.actions;

export default cartSlice;
