import {ADD_NEW_CONTACT,DELETE_CONTACT, GET_CONTACT,SAVE_CONTACT} from './constant'

// const INIT_STATE = {};
// const url = 'http://localhost:8001/posts';

// function contactReducer(state=INIT_STATE, action){
//   switch(action.type){
//     case ADD_NEW_CONTACT:
//       fetch(url,{
//         method:"POST",
//         'content-type':'application/json',
//         body: JSON.stringify(action.payload)
//       })
//       .then((data)=>console.log('SUCCESS',data))
//       .catch(e=>console.log(e))
//     default:
//       return state  
//   }
// }

// export default contactReducer

const INIT_STATE ={
  contact:[]
}


const ContactReducer =(state=INIT_STATE, action)=>{
  switch (action.type){
    case ADD_NEW_CONTACT:
      return {...state, contact: [...state.contact, action.payload]}
      case GET_CONTACT:
        return {...state, contact: action.payload}
    case DELETE_CONTACT:
        return {...state, contact: state.contact.filter(e => action.payload !== e.id)}
    case SAVE_CONTACT:
        return {...state, contact: state.contact.map(item => item.id === action.payload.id ? action.payload : item)}  
    default:
      return state;
  }
}

export default ContactReducer;











