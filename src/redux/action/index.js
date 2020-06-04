import { INITIALIZE_APP, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from "./types";

export function initializeApp() {
  return {
    type: INITIALIZE_APP
  }
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item
  }
}
export const subtractQuantity = (item) => {
  return {
    type: SUB_QUANTITY,
    item
  }
}

export const addQuantity = (item) => {
  return {
    type: ADD_QUANTITY,
    item
  }
}
