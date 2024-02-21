import React, { createContext, useReducer,useContext } from 'react'

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state,action)=>{
    //we are using it so it can help us change the cart without multiple useState
switch(action.type){
    case "ADD":
        //values of action.id depends on what we are calling in Card.js
        return [...state,{id:action.id,name:action.name,size:action.size,price:action.price,qty:action.qty,img:action.img}]
    default:
        console.log("Error in reducer")    
}
}
export const Cartprovider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);
return(
    <cartDispatchContext.Provider value = {dispatch}>
        <cartStateContext.Provider value={state}>
{children}
        </cartStateContext.Provider>
    </cartDispatchContext.Provider>
);
}

export const useCart = ()=>(cartStateContext)
// export const useDispatchCart = ()=>(cartDispatchContext)
export const useDispatchCart = () => useContext(cartDispatchContext);
