import { ADD_NEW_CONTACT, DELETE_CONTACT,SAVE_CONTACT,GET_CONTACT } from "./constant";

export const addNewContact = (newContact)=>({
  type: ADD_NEW_CONTACT,
  payload: newContact,
  
})
export const getContact = (data)=>({
  type: GET_CONTACT,
  payload: data,
  
})
export const saveContact = (data)=>({
  type: SAVE_CONTACT,
  payload: data,
  
})
export const deleteContact = (id)=>({
  type: DELETE_CONTACT,
  payload: id,
  
})

