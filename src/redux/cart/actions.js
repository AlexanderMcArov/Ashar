import {  ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, OPEN_MODAL } from "./constants";

export const addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})

export const openModal = (list) => ({
    type: OPEN_MODAL,
    payload: list
})